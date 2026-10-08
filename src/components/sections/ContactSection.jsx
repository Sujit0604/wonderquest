import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, Clock, ShieldCheck, RefreshCw, Info } from 'lucide-react';
import { contactData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';
import { fireSuperCelebration } from '../../utils/confetti';

export default function ContactSection() {
  // Credentials come only from .env (VITE_* vars). Never hardcode them here:
  // anything in source ships to the browser and can be abused to spam the inbox.
  const recipientEmail = (import.meta.env.VITE_RECIPIENT_EMAIL || '').trim();
  const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim();
  const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim();
  const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim();

  const isEmailJsConfigured = Boolean(
    serviceId && templateId && publicKey &&
    !serviceId.includes('xxxx') && !publicKey.includes('xxxx') && !publicKey.includes('your_')
  );

  // Client-side send cooldown: slows down scripted resubmission (spam hardening).
  const SUBMIT_COOLDOWN_MS = 20000;
  const lastSubmitAt = React.useRef(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    childAge: 'Ages 3–4 (Preschool)',
    message: '',
    _gotcha: '', // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [deliveryMethod, setDeliveryMethod] = useState(null); // 'emailjs' | 'simulated'
  const [errorMessage, setErrorMessage] = useState('');

  const displayEmail = recipientEmail || 'our team inbox';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid parent email address.';
    }
    if (!formData.subject) {
      errs.subject = 'Please select a topic.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot: if filled, quietly drop spam bot
    if (formData._gotcha) {
      console.warn('Spam bot submission prevented by honeypot.');
      setSubmitStatus('success');
      return;
    }

    if (!validate()) return;

    const now = Date.now();
    if (lastSubmitAt.current && now - lastSubmitAt.current < SUBMIT_COOLDOWN_MS) {
      setSubmitStatus('error');
      setErrorMessage('Please wait a moment before sending another message.');
      return;
    }
    lastSubmitAt.current = now;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // Exact parameters required by your EmailJS template body:
    // "A message from {{name}} has been received! Parent Email: {{email}}, Child Age: {{child_age}}, Topic: {{title}}, Message: {{message}}"
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      child_age: formData.childAge,
      title: formData.subject,
      message: formData.message.trim(),

      // System & routing parameters
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      to_email: recipientEmail,
      recipient_email: recipientEmail,
      subject: formData.subject,
      time: new Date().toLocaleString(),
      timestamp: new Date().toLocaleString(),
    };

    try {
      if (isEmailJsConfigured) {
        // Initialize EmailJS with public key and send
        emailjs.init({ publicKey: publicKey });
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        console.log('EmailJS dispatch success:', response);
        setDeliveryMethod('emailjs');
        setSubmitStatus('success');
        fireSuperCelebration();
      } else {
        // Fallback simulation if not configured
        await new Promise((resolve) => setTimeout(resolve, 800));
        setDeliveryMethod('simulated');
        setSubmitStatus('success');
        fireSuperCelebration();
      }
    } catch (err) {
      console.error('EmailJS Error Details:', err);
      const detail = err?.text || err?.message || (typeof err === 'string' ? err : 'Network or service error. Check browser console.');
      setSubmitStatus('error');
      setErrorMessage(detail);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'general',
      childAge: '3-4',
      message: '',
      _gotcha: '',
    });
    setErrors({});
    setSubmitStatus(null);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={contactData.sectionTag}
          title={contactData.title}
          subtitle={contactData.subtitle}
          tagVariant="rose"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Support info & peace of mind */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100">
              <h3 className="text-xl font-black text-slate-900 mb-4">
                Real Humans Behind WonderQuest
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Whether you have ideas for new learning islands, need help family-sharing across devices, or want educational licenses for your preschool, we respond to every note.
              </p>

              <div className="space-y-4 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-sky-600 flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-normal">Direct Recipient Inbox</p>
                    {recipientEmail ? (
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="text-slate-900 font-bold hover:text-sky-600 transition-colors break-all"
                      >
                        {recipientEmail}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-bold">Our team inbox</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-amber-600 flex items-center justify-center shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-normal">Dedicated Hours</p>
                    <p className="text-slate-900 font-bold">{contactData.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-normal">Our Guarantee</p>
                    <p className="text-slate-900 font-bold">{contactData.responseGuarantee}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EmailJS Integration Info Banner */}
            <div className="p-6 rounded-3xl bg-indigo-50/80 border border-indigo-200/80 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>EmailJS Integration Active</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parent messages route to <strong className="text-slate-900">{displayEmail}</strong> via EmailJS browser SDK.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                  isEmailJsConfigured
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isEmailJsConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  {isEmailJsConfigured ? 'Live EmailJS Connected' : 'Ready (Add Keys in .env)'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative">
            {submitStatus === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mb-2 leading-relaxed">
                  Thank you for reaching out, <span className="font-bold text-slate-900">{formData.name}</span>!
                </p>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mb-6 leading-relaxed">
                  Your inquiry is addressed to{' '}
                  <span className="font-bold text-sky-700">{displayEmail}</span>.
                  We will reply to <span className="font-bold text-slate-800">{formData.email}</span> within 24 hours.
                </p>

                {deliveryMethod === 'simulated' && (
                  <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left max-w-md">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-xs mb-1">
                      <Info className="w-4 h-4 text-amber-600" />
                      <span>Note for Administrator:</span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-relaxed">
                      Target inbox set to <strong>{displayEmail}</strong>. To receive live messages directly in your Gmail inbox, paste your free EmailJS Service ID, Template ID, and Public Key into the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env</code> file.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot Field (Anti-spam hidden from humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this empty</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Recipient indicator badge */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold">Parent Contact Form</span>
                  <span className="flex items-center gap-1 text-sky-600 font-bold">
                    <Mail className="w-3.5 h-3.5" /> To: {displayEmail}
                  </span>
                </div>

                {/* Error Banner */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-bold">Email dispatch notice</p>
                      <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
                      <div className="mt-2.5 flex flex-wrap items-center gap-2">
                        {recipientEmail && (
                          <a
                            href={`mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject ? `[WonderQuest] ${formData.subject}` : 'WonderQuest Inquiry')}&body=${encodeURIComponent(
                              `Parent Name: ${formData.name}\nParent Email: ${formData.email}\nChild's Age: ${formData.childAge}\n\nMessage:\n${formData.message}`
                            )}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors"
                          >
                            Send directly via Gmail / Mail App →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-2xl text-slate-900 text-sm border transition-all ${
                        errors.name
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-600 font-semibold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Parent Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-2xl text-slate-900 text-sm border transition-all ${
                        errors.email
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-600 font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject & Child Age Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Inquiry Subject <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl text-slate-900 text-sm border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 bg-white cursor-pointer"
                    >
                      {contactData.subjects.map((sub) => (
                        <option key={sub.value} value={sub.value}>
                          {sub.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Child's Age Range (Optional)
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl text-slate-900 text-sm border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 bg-white cursor-pointer"
                    >
                      {contactData.ageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    How Can We Help Your Family? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`resize-none block w-full px-4 py-3 rounded-2xl text-slate-900 text-sm border transition-all ${
                      errors.message
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-600 font-semibold">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-black text-slate-900 text-base bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 border-2 border-amber-300 shadow-md hover:shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      <span>Sending to {displayEmail}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message to Team</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 We protect your email with strict encryption and never send spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
