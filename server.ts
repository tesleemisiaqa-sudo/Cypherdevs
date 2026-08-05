import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy GoogleGenAI client initialization
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

const N8N_WEBHOOK_URL = 'https://teshak.app.n8n.cloud/webhook/Cypherdevs';

// Health check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'CypherDevs Technologies',
    n8nWebhook: N8N_WEBHOOK_URL,
    timestamp: new Date().toISOString()
  });
});

// Helper function to extract text response from n8n output formats
function parseN8nResponse(data: any): string | null {
  if (!data) return null;
  if (typeof data === 'string') return data.trim();
  
  // If array response
  if (Array.isArray(data) && data.length > 0) {
    const item = data[0];
    if (typeof item === 'string') return item.trim();
    if (typeof item === 'object') {
      return item.output || item.response || item.message || item.text || item.data || JSON.stringify(item);
    }
  }

  // If object response
  if (typeof data === 'object') {
    if (data.output && typeof data.output === 'string') return data.output;
    if (data.response && typeof data.response === 'string') return data.response;
    if (data.message && typeof data.message === 'string') return data.message;
    if (data.text && typeof data.text === 'string') return data.text;
    if (data.data && typeof data.data === 'string') return data.data;
    if (data.json && typeof data.json === 'object') return parseN8nResponse(data.json);
    
    // Check nested fields or stringify
    const firstVal = Object.values(data).find(v => typeof v === 'string' && v.length > 0);
    if (firstVal) return firstVal as string;
  }

  return null;
}

// Helper function to generate rich domain responses when external AI quota is limited
function generateSmartDomainReply(prompt: string, language: string): string {
  const p = prompt.toLowerCase();
  const isAr = language === 'ar' || /[\u0600-\u06FF]/.test(prompt);

  if (p.includes('cost') || p.includes('price') || p.includes('estimate') || p.includes('تكلفة') || p.includes('سعر') || p.includes('تقدير')) {
    return isAr
      ? `تقدير تكاليف المشاريع في سيفرديفز تكنولوجيز:\n• التطبيقات المتوسطة وSaaS: تبدأ من $5,000 - $15,000 حسب نطاق المتطلبات.\n• أنظمة المؤسسات والذكاء الاصطناعي: تبدأ من $15,000+ شاملة البنية السحابية والأمان.\n\nيمكنك استخدام خيار "طلب عرض سعر" للبدء في تحليل متطلبات نظامك الفنية!`
      : `CypherDevs Project Cost Guide:\n• SaaS & Web/Mobile Apps: Typically range from $5,000 - $15,000 based on functional scope.\n• Enterprise AI & Cloud Infrastructure: Starts from $15,000+ with dedicated DevOps & security audits.\n\nClick "Request Proposal" in the menu to get a custom, itemized estimate within 24 hours!`;
  }

  if (p.includes('course') || p.includes('bootcamp') || p.includes('learn') || p.includes('دورة') || p.includes('تدريب') || p.includes('مبتدئ')) {
    return isAr
      ? `برامج ومخيمات سيفرديفز الأكاديمية:\n1. Full-Stack Engineering Bootcamp: للراغبين في إتقان React, Node.js وTypeScript.\n2. AI & Machine Learning Engineering: للتعامل مع النماذج الذكية وتكامل Gemini API.\n3. Cybersecurity & Penetration Testing: لاختبار اختراق الأنظمة وحمايتها.\n\nيمكنك الضغط على زر التسجيل في الدورة المطلوبة للحجز المباشر!`
      : `CypherDevs Academy Programs:\n1. Full-Stack Software Engineering: Master React, Node.js, and TypeScript.\n2. AI & Machine Learning Integration: Learn LLM orchestration, RAG, and AI agent development.\n3. Cybersecurity & Cloud Security: Practical ethical hacking and infrastructure hardening.\n\nSelect any course on our homepage to view the detailed syllabus and register!`;
  }

  if (p.includes('security') || p.includes('audit') || p.includes('أمان') || p.includes('حماية') || p.includes('اختراق')) {
    return isAr
      ? `خدمات الأمان السيبراني في سيفرديفز:\nنقدم تقييمات ثغرات شاملة (Vulnerability Assessment)، واختبارات اختراق الأنظمة (Penetration Testing)، ومراجعة الكود المصدري وفق معايير OWASP Top 10 والشهادات العالمية.`
      : `CypherDevs Cybersecurity Services:\nWe perform comprehensive vulnerability assessments, penetration testing, and source code audits compliant with OWASP Top 10 & ISO 27001 standards.`;
  }

  return isAr
    ? `أهلاً بك في سيفرديفز تكنولوجيز! نحن متفوقون في تطوير الأنظمة البرمجية المؤسسية، حلول الذكاء الاصطناعي، وأكاديميات التدريب المتقدمة. كيف يمكننا مساعدتك اليوم؟`
    : `Welcome to CypherDevs Technologies! We specialize in custom software engineering, enterprise AI integrations, and tech bootcamps. How can we assist you today?`;
}

// Dedicated n8n Chat Webhook Proxy Endpoint
app.post('/api/n8n/chat', async (req, res) => {
  const { prompt, sessionId = 'cypher_session_default', language = 'en' } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // 1. Try forwarding to n8n webhook
  try {
    console.log(`[n8n] Forwarding prompt to ${N8N_WEBHOOK_URL}...`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      },
      body: JSON.stringify({
        chatInput: prompt,
        message: prompt,
        prompt: prompt,
        sessionId,
        language,
        timestamp: new Date().toISOString()
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (n8nRes.ok) {
      const contentType = n8nRes.headers.get('content-type') || '';
      let replyText: string | null = null;

      if (contentType.includes('application/json')) {
        const json = await n8nRes.json();
        replyText = parseN8nResponse(json);
      } else {
        const rawText = await n8nRes.text();
        replyText = rawText ? rawText.trim() : null;
      }

      if (replyText) {
        return res.json({ response: replyText, source: 'n8n', success: true });
      }
    }
  } catch (err: any) {
    console.warn('[n8n] Webhook connection status/timeout:', err.message);
  }

  // 2. Try Gemini AI if n8n webhook didn't respond or returned non-200
  try {
    const ai = getAIClient();
    if (ai) {
      const systemInstruction = `You are "CypherAI", technical advisor for CypherDevs Technologies.
Respond concisely in ${language === 'ar' ? 'Arabic' : 'English'}. Max 200 words.`;

      const candidateModels = ['gemini-2.5-flash', 'gemini-2.0-flash'];
      for (const modelName of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: { systemInstruction, temperature: 0.6 }
          });
          if (response && response.text) {
            return res.json({ response: response.text, source: `gemini (${modelName})` });
          }
        } catch (mErr: any) {
          // Silent catch for model quota / availability
        }
      }
    }
  } catch (aiErr) {
    // Ignore AI client init errors
  }

  // 3. Smart domain fallback if external services are unavailable or rate-limited
  const smartReply = generateSmartDomainReply(prompt, language);
  return res.json({ response: smartReply, source: 'cypher_engine' });
});

// Alias /api/ai/consult to /api/n8n/chat
app.post('/api/ai/consult', (req, res) => {
  // Forward to /api/n8n/chat
  req.url = '/api/n8n/chat';
  app._router.handle(req, res);
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CypherDevs Technologies server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

export default app;
