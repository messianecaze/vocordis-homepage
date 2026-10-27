"use client";
// NOT PUBLISHED. The coach FAQ is kept here, unchanged, until the team
// decides to publish it. Before it goes public, review the answers on how
// the AI was trained, data protection, the Heppner ruling, and the minimum
// number of stories.
import { useState } from "react";

const faqCategories = [
  {
    id: "getting-started",
    label: "Getting started",
    color: "#1B2B4A",
    items: [
      { q: "Do I need training before I can use the Workbench?", a: "Yes, and this is intentional. You cannot use the Workbench effectively without understanding how to conduct a good fulfillment story interview. The quality of the analysis depends entirely on the quality of what goes in. VoCordis trains coaches on the methodology first, so that when you open the platform, you already know how to read the patterns that the AI will surface. The Workbench supports your coaching judgment, it cannot replace it." },
      { q: "How do I log in? Do I need a password?", a: "No password is needed. Go to app.vocordis.com, enter your coach email, and you will receive a magic link in your inbox. Click the link to log in. A new link is sent each time, there is nothing to remember or reset." },
      { q: "How do I set up my first client?", a: "Once you are logged in, click Add Client and enter your client's first name, last name, and personal email address. You create the account on their behalf, they do not set it up themselves. Once created, click Invite your client to begin Phase 1 and send them their story invitation." },
      { q: "What does my client receive when I send the invitation?", a: "They receive an automated welcome email with a magic link. The link takes them to a story submission form that explains what fulfillment stories are and walks them through submitting short and expanded versions of their stories. The current email is a standard template, and in a future version you will be able to personalize it before it is sent." },
      { q: "Can my client see the analysis or the report on the platform?", a: "No. Your client's only interaction with the platform is submitting their stories through the form. They never see the analysis, the AI output, or the report. The report is yours to edit and share with your client directly, by email, in a session, or however you choose." }
    ]
  },
  {
    id: "methodology",
    label: "Methodology & coaching sequence",
    color: "#8C6814",
    items: [
      { q: "Where does the Workbench fit in the coaching sequence?", a: "The Workbench is most active between Sessions 3 and 5. Session 1 is orientation. Session 2 is the fulfillment story interview. Session 3 applies the interpretive lenses. The deep analytical work, where the Workbench plays its central role, happens between Sessions 3 and 4. Session 5 is presenting the Purpose Pattern Report and exploring its implications with the client." },
      { q: "Why did VoCordis ask coaches to do the analysis manually before using the Workbench?", a: "Intentionally. The best way to understand what the platform does is to have wrestled with the analysis yourself first. The effort, the uncertainty, and the sense of incompletion you may have felt doing it manually, that is exactly what the Workbench is designed to relieve. Coaches who have done the work by hand are far better equipped to evaluate the platform's output and use their judgment at each selection point." },
      { q: "What is the integrated purpose pattern statement, and who writes it?", a: "The integrated purpose pattern statement is a single synthesized sentence that captures the full purpose pattern, core desires, modes of self-gift, and optimal environments, woven together. The Workbench generates a suggested version, but it is fully editable. Like everything else in the report, the final wording is in the coach's hands." },
      { q: "How many stories are needed for a good analysis?", a: "A minimum of 3 to 4 stories is required to proceed. In practice, most clients share 5 to 7 stories, and this range tends to produce the richest analysis. Stories that were not explored during the interview, or that feel peripheral, can be de-selected before the analysis begins. The coach decides which stories to include." },
      { q: "Can the Workbench be used without a fulfillment story interview?", a: "Not effectively. The interview transcript is a critical input, it is where the coach draws out depth, explores emotions, and captures the client's own language about their experiences. Without a strong interview, the analysis will be weaker. A focused 60 to 90 minute interview covering the selected stories will produce a far more faithful analysis than submitted stories alone." }
    ]
  },
  {
    id: "analysis",
    label: "How the AI analysis works",
    color: "#5C1220",
    items: [
      { q: "What does the AI actually do in the Workbench?", a: "The AI reads the fulfillment stories and interview transcript you have provided, then surfaces candidate patterns across three dimensions: core desires, modes of self-gift, and optimal environments. For each dimension, it provides evidence, specific passages from the stories and transcript that support each suggested element. The coach reviews that evidence and selects the elements that feel most faithful to the person. The AI suggests; the coach decides." },
      { q: "How was the AI trained?", a: "The Workbench AI was trained on Dr. Joshua Miller's analytical methodology, decades of practice working with fulfillment stories and purpose patterns, combined with narrative analysis and positive psychology frameworks. It was not trained on a general internet dataset. It applies specific rules of interpretation: for example, that a core desire must appear in every story, or that optimal environments must reflect genuine conditions for flourishing rather than surface preferences." },
      { q: "Will the AI remember my coaching style or adapt to my voice over time?", a: "No. The Workbench does not learn from or adapt to your personal coaching style between sessions. Any notes you add during an analysis inform that specific session only. The AI will not produce a report that sounds like you, it is modeled on Joshua's methodology. If you want your voice in the report, you edit it in manually, which is the intended workflow." },
      { q: "Will the AI remember a previous client when I work with a new one?", a: "No. Each analysis runs completely independently. The AI has no knowledge of previous clients, previous sessions, or previous reports. There is no cross-contamination of data between coaching relationships." },
      { q: "What if the AI output doesn't feel right for my client?", a: "Trust your coaching judgment. The platform surfaces 5 candidates per dimension precisely so you can evaluate and select. If a suggested core desire does not resonate, do not select it. If the wording needs adjustment, edit it. The report is fully editable. The AI provides the analytical starting point; the coach provides the human judgment that makes the analysis faithful to this specific person." },
      { q: "Can I run the analysis with different story combinations to compare?", a: "Yes, and this is encouraged. Trying different selections of stories and comparing the resulting patterns can be genuinely illuminating. It also helps you as a coach develop a sharper intuition for which stories are most revealing." }
    ]
  },
  {
    id: "privacy",
    label: "Privacy, confidentiality & data security",
    color: "#444441",
    items: [
      { q: "Is my client's data confidential?", a: "Yes, completely. Client data is stored securely and is only visible to you as their coach. It is never shared with third parties, never used to train AI models, and never aggregated with other users' data. The database is hosted in Switzerland under European data protection standards (GDPR). When your client shares their stories on the platform, their data enters a protected environment and does not leave it." },
      { q: "How is VoCordis different from using a consumer AI tool like ChatGPT?", a: "Three important ways. First, VoCordis accesses AI through a business API, not a consumer-facing chatbot, client data is held under enterprise confidentiality terms and is never used to train the underlying AI model. Second, client stories are entered directly into the VoCordis platform and never travel through uncontrolled channels. Third, the AI analysis is always initiated and supervised by a trained coach, not by the client acting independently." },
      { q: "What about the Heppner ruling? Does it affect coaches using the Workbench?", a: "The United States v. Heppner ruling found that AI-assisted legal work was not protected by attorney-client privilege. It turned on three conditions: a public consumer AI tool was used, the platform's terms allowed data disclosure to third parties, and no qualified professional was directing the process. The VoCordis Workbench was intentionally designed to avoid all three: it uses a business API (not a consumer tool), never discloses data to third parties, and requires coach supervision at every step. If a client asks whether their data is protected, you can answer honestly: yes." },
      { q: "Does the AI see my client's full identity?", a: "No. The AI agent receives only the data needed for the current analysis, story text and transcript content, and operates in a sealed environment. It cannot reconstruct or identify the client from this data. Think of it as a locked room: the analysis happens inside, and nothing leaves." },
      { q: "Can my client print or download their submitted stories?", a: "Currently, the client cannot download their stories directly from the platform. All submitted stories are appended in full to the Purpose Pattern Report, which you receive and control. If a client wants a copy of their stories, you can share the relevant section of the report with them." },
      { q: "Should my client receive a confidentiality notice when they submit their stories?", a: "Yes, this is planned for a future version of the platform. In the meantime, we recommend that coaches share this information with their clients before sending the story invitation. Key points: data is visible only to you, never shared with third parties, never used to train AI, and stored in Switzerland under GDPR." }
    ]
  },
  {
    id: "transcripts",
    label: "Transcripts & interview upload",
    color: "#0F6E56",
    items: [
      { q: "How do I generate a transcript?", a: "You create the transcript yourself using a recording tool, Zoom's built-in transcription, your phone's voice recorder combined with a transcription app like Otter.ai or Descript, or any other method that produces readable text. The Workbench will add in-platform transcription in a future version. For now, paste your transcript text directly into the Interview Upload field." },
      { q: "How long should the interview be?", a: "Aim for 60 to 90 minutes of interview content. This is typically more than enough to explore 4 to 7 stories in depth. The current platform limit is the equivalent of 2 hours. More is not better, a focused, well-conducted interview produces a stronger analysis than hours of wide-ranging conversation." },
      { q: "Do I upload a separate transcript for each story?", a: "No. Upload one consolidated block of text covering all the stories you plan to use. The platform identifies which parts of the interview relate to which story automatically, you do not need to label or separate them. Paste everything into a single field." },
      { q: "Can I add notes that are not in the transcript?", a: "Yes, and this is encouraged. There is a separate coach's notes field alongside the transcript upload. Use it to capture anything you observed during the interview that is not in the recording: body language, moments of hesitation, emotional tone, phrases that seemed particularly charged. The platform factors these notes into the analysis." },
      { q: "Does the transcript need to be formatted in a specific way?", a: "No. A plain block of text is fine. You do not need to label speakers, add timestamps, or structure it in any particular way. The platform can identify who is speaking from context." }
    ]
  },
  {
    id: "report",
    label: "The Purpose Pattern Report",
    color: "#185FA5",
    items: [
      { q: "What does the generated report contain?", a: "The report is a Word document (compatible with Google Docs) and includes: an introductory page explaining the purpose pattern framework; the personalized purpose pattern statement; core desires with definitions, evidence, and a direct quote from the client's own words; modes of self-gift with descriptions; optimal environments; suggested implications; a space for coach's notes; and all fulfillment stories appended at the end." },
      { q: "Can I edit the report before sharing it with my client?", a: "Yes, and you should. The report is fully editable. Every section, every sentence, every suggested implication can be changed. The coach's editing is an essential part of the process. The platform provides a strong, evidence-based starting point; the coach's judgment and knowledge of the person completes it." },
      { q: "What is the integrated core desire statement?", a: "It is a single synthesized sentence that intertwines the three core desires, describing how they work together as a unified expression of the person's deepest drives. Dr. Miller describes it as the beating heart of the purpose pattern, the three core desires woven together like strands of a rope. The platform suggests a version; the coach edits it until it is faithful." },
      { q: "How does my client receive the report?", a: "You deliver it. The client never accesses the report through the platform. Download it, edit it as needed, and then share it with your client, by email, in a coaching session, or in whatever format works best for your relationship." },
      { q: "Will the report sound like it was written by AI?", a: "The initial draft reflects Dr. Miller's analytical voice, not a generic AI tone. But it is a starting point, not a finished document. Coaches are expected to edit, personalize, and refine it before sharing. The more you bring your coaching knowledge of the client into the editing process, the more the report will feel like a genuinely human document." }
    ]
  }
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const toggle = (id: string) => setOpenId(openId === id ? null : id);
  const catsToShow = activeCategory === "all" ? faqCategories : faqCategories.filter(c => c.id === activeCategory);
  const q = search.toLowerCase();
  const filtered = catsToShow.map(cat => ({ ...cat, items: q ? cat.items.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) : cat.items })).filter(cat => cat.items.length > 0);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow center">Support</p>
        <h2 className="heading center">Frequently asked questions</h2>
        <hr className="rule" />
        <p className="caption center" style={{ marginBottom: "2rem" }}>Everything coaches need to know about the VoCordis Workbench</p>
        <div style={{ position: "relative", marginBottom: "1.25rem" }}>
          <input type="text" className="faq-search" placeholder="Search questions..." value={search} onChange={e => { setSearch(e.target.value); setActiveCategory("all"); }} />
          <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", opacity: 0.5 }} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="5" stroke="var(--espresso)" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="var(--espresso)" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
          {["all", ...faqCategories.map(c => c.id)].map(id => {
            const cat = faqCategories.find(c => c.id === id);
            return (
              <button key={id} className="faq-chip" aria-pressed={activeCategory === id} onClick={() => setActiveCategory(id)}>
                {id === "all" ? "All questions" : cat?.label}
              </button>
            );
          })}
        </div>
        {filtered.length === 0 && <p className="caption center" style={{ padding: "2rem 0" }}>No questions match your search.</p>}
        {filtered.map(cat => (
          <div key={cat.id} style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: "1px solid var(--border)", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--muted-text)", letterSpacing: "0.06em", textTransform: "uppercase", flex: 1 }}>{cat.label}</span>
              <span style={{ fontSize: "0.8125rem", color: "var(--muted-text)" }}>{cat.items.length} question{cat.items.length !== 1 ? "s" : ""}</span>
            </div>
            {cat.items.map((item, i) => {
              const id = `${cat.id}-${i}`;
              const isOpen = openId === id;
              return (
                <div key={id} className="faq-item" data-open={isOpen}>
                  <button onClick={() => toggle(id)} aria-expanded={isOpen} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", cursor: "pointer", background: "none", border: "none", fontFamily: "inherit", textAlign: "left" }}>
                    <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", background: isOpen ? "var(--espresso)" : "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 3, transition: "transform 0.2s", transform: isOpen ? "rotate(90deg)" : "none" }}>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true"><path d="M1.5 1.5L6.5 6L1.5 10.5" stroke={isOpen ? "var(--parchment)" : "var(--muted-text)"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--espresso)", lineHeight: 1.5, flex: 1 }}>{item.q}</span>
                  </button>
                  {isOpen && <p style={{ fontSize: "0.9375rem", color: "var(--espresso)", lineHeight: 1.7, padding: "0 16px 16px 46px" }}>{item.a}</p>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
