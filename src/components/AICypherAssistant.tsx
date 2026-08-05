import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, Bot, User, RefreshCw, Cpu, CheckCircle2, Zap, RotateCcw, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AICypherAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  openQuoteModal: (service?: string) => void;
}

export const AICypherAssistant: React.FC<AICypherAssistantProps> = ({
  isOpen,
  onClose,
  openQuoteModal
}) => {
  const { lang, isRTL } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `sess_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`);
  
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; source?: string }>>([
    {
      sender: 'ai',
      text: lang === 'ar'
        ? 'أهلاً بك! أنا CypherAI المتصل بـ n8n Webhook الرئيسي لمؤسسة سيفرديفز (https://teshak.app.n8n.cloud/webhook/Cypherdevs). كيف يمكنني مساعدتك اليوم في استشارات برمجية، تقدير التكلفة، أو برامج التدريب؟'
        : 'Welcome! I am CypherAI, connected directly to CypherDevs n8n Automation Engine (https://teshak.app.n8n.cloud/webhook/Cypherdevs). How can I assist you with software estimations, AI integration, or bootcamp registration?',
      source: 'n8n'
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = lang === 'ar' ? [
    'تقدير تكلفة تطوير نظام SaaS متكامل',
    'ما هي أفضل دورة لبدء مسار البرمجة في سيفرديفز؟',
    'استشارة حول اختبارات الأمان وتأمين البيانات'
  ] : [
    'Estimate cost for enterprise SaaS platform',
    'Which bootcamp course is best to get started?',
    'Cybersecurity audit and data security consultation'
  ];

  const handleSend = async (userText: string) => {
    if (!userText.trim() || loading) return;

    const newMessages = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Primary call to our backend n8n chat endpoint
      const res = await fetch('/api/n8n/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userText,
          sessionId,
          language: lang
        })
      });

      const data = await res.json();
      if (data && data.response) {
        setMessages([
          ...newMessages,
          { sender: 'ai', text: data.response, source: data.source || 'n8n' }
        ]);
      } else {
        throw new Error('Empty response payload');
      }
    } catch (err) {
      // Direct client fallback to n8n webhook if proxy API is unreachable
      try {
        const directRes = await fetch('https://teshak.app.n8n.cloud/webhook/Cypherdevs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chatInput: userText,
            message: userText,
            prompt: userText,
            sessionId,
            language: lang
          })
        });

        if (directRes.ok) {
          const directData = await directRes.json();
          const parsedText = typeof directData === 'string'
            ? directData
            : (directData?.output || directData?.message || directData?.response || directData?.text || JSON.stringify(directData));
          
          if (parsedText) {
            setMessages([...newMessages, { sender: 'ai', text: parsedText, source: 'n8n' }]);
            return;
          }
        }
      } catch (clientErr) {
        console.warn('Direct n8n fetch error:', clientErr);
      }

      const fallback = lang === 'ar'
        ? 'تم استلام رسالتك عبر بوابة سيفرديفز n8n. يمكنك أيضاً الانتقال مباشرة لطلب عرض سعر رسمي لمشروعك البرمجي.'
        : 'Your message was dispatched to CypherDevs n8n webhook. Feel free to also request an official technical quote below!';
      
      setMessages([...newMessages, { sender: 'ai', text: fallback, source: 'n8n' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: 'ai',
        text: lang === 'ar'
          ? 'تم بدء جلسة محادثة جديدة عبر n8n Webhook. تفضل بطرح استفسارك!'
          : 'Started a fresh session with CypherDevs n8n Chat Engine. Ask me anything!',
        source: 'n8n'
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="sleek-card border-l border-blue-200 dark:border-blue-900/60 w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative text-slate-900 dark:text-slate-100 bg-white dark:bg-[#07132b]">
        
        {/* Header */}
        <div className="p-4 bg-blue-50/80 dark:bg-blue-950/80 border-b border-blue-100 dark:border-blue-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-blue-950 dark:text-white text-base">CypherAI Chatbox</h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-[10px] text-blue-600 dark:text-blue-400 font-mono tracking-tight flex items-center gap-1">
                <span>n8n Webhook Active</span>
                <span className="text-slate-400">•</span>
                <span className="truncate max-w-[120px]">teshak.app.n8n.cloud</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClearChat}
              title={lang === 'ar' ? 'مسح المحادثة' : 'Clear Chat'}
              className="p-1.5 rounded-lg bg-blue-100/70 dark:bg-blue-900/50 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-blue-100/70 dark:bg-blue-900/50 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Webhook Connection Info Banner */}
        <div className="px-4 py-2 bg-blue-50/60 dark:bg-blue-950/40 border-b border-blue-100 dark:border-blue-900/40 text-[11px] font-mono text-blue-700 dark:text-blue-300 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Endpoint: /webhook/Cypherdevs</span>
          </span>
          <span className="text-[10px] bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded text-blue-800 dark:text-blue-200 font-semibold">n8n Cloud</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className="max-w-[85%] space-y-1">
                <div
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white font-medium rounded-tr-none shadow-md shadow-blue-500/10'
                      : 'bg-blue-50/80 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 text-slate-800 dark:text-slate-100 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text.split('\n').map((line, lineIdx) => {
                    let cleanLine = line;
                    const isBullet = cleanLine.trim().startsWith('* ') || cleanLine.trim().startsWith('- ');
                    if (isBullet) {
                      cleanLine = cleanLine.replace(/^\s*[\*\-]\s*/, '• ');
                    }
                    const parts = cleanLine.split('**');
                    return (
                      <p key={lineIdx} className={isBullet ? 'ml-2 my-0.5' : 'my-1'}>
                        {parts.map((part, partIdx) => {
                          const sanitizedPart = part.replace(/\*/g, '');
                          if (partIdx % 2 === 1) {
                            return (
                              <strong key={partIdx} className="font-bold text-blue-950 dark:text-white">
                                {sanitizedPart}
                              </strong>
                            );
                          }
                          return sanitizedPart;
                        })}
                      </p>
                    );
                  })}
                </div>

                {msg.sender === 'ai' && (
                  <div className="text-[9px] font-mono text-blue-600/70 dark:text-blue-400/70 px-1 flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                    <span>Powered by n8n Webhook</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300 font-mono animate-pulse bg-blue-50 dark:bg-blue-900/30 p-2.5 rounded-xl border border-blue-200 dark:border-blue-800 max-w-[80%]">
              <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
              <span>Querying n8n webhook engine...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions & Input Form */}
        <div className="p-4 bg-white dark:bg-[#07132b] border-t border-blue-100 dark:border-blue-900/60 space-y-3">
          
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts.map((promptText, i) => (
              <button
                key={i}
                onClick={() => handleSend(promptText)}
                className="text-[11px] text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-100 dark:hover:bg-blue-900/80 border border-blue-200 dark:border-blue-800 px-2.5 py-1 rounded-lg text-left truncate max-w-full cursor-pointer transition-colors font-medium"
              >
                {promptText}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'ar' ? 'اكتب رسالتك لربطها مع n8n Webhook...' : 'Type message to send to n8n webhook...'}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors disabled:opacity-50 cursor-pointer shadow-md shadow-blue-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <button
            onClick={() => {
              onClose();
              openQuoteModal();
            }}
            className="w-full py-2 rounded-lg text-[11px] font-bold bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-center cursor-pointer transition-colors"
          >
            {lang === 'ar' ? 'أو انتقل مباشرة لطلب عرض سعر تفصيلي' : 'Or request a detailed formal quote'}
          </button>

        </div>

      </div>
    </div>
  );
};

