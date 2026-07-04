"use client";
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

function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const toggle = (id: string) => setOpenId(openId === id ? null : id);
  const catsToShow = activeCategory === "all" ? faqCategories : faqCategories.filter(c => c.id === activeCategory);
  const q = search.toLowerCase();
  const filtered = catsToShow.map(cat => ({ ...cat, items: q ? cat.items.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) : cat.items })).filter(cat => cat.items.length > 0);

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>
      <p style={{ color: "#8C6814", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>Support</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1B2B4A", textAlign: "center", marginBottom: "0.75rem" }}>Frequently asked questions</h2>
      <p style={{ textAlign: "center", color: "#8A7060", fontSize: "0.9375rem", marginBottom: "2rem" }}>Everything coaches need to know about the VoCordis Workbench</p>
      <div style={{ position: "relative", marginBottom: "1.25rem" }}>
        <input type="text" placeholder="Search questions..." value={search} onChange={e => { setSearch(e.target.value); setActiveCategory("all"); }} style={{ width: "100%", padding: "11px 14px 11px 38px", fontFamily: "inherit", fontSize: "0.9375rem", color: "#2D1F14", background: "#fff", border: "1px solid #DDD4C8", borderRadius: "8px", outline: "none" }} />
        <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", opacity: 0.4 }} width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#2D1F14" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="#2D1F14" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
        {["all", ...faqCategories.map(c => c.id)].map(id => {
          const cat = faqCategories.find(c => c.id === id);
          const isActive = activeCategory === id;
          return (
            <button key={id} onClick={() => setActiveCategory(id)} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "20px", border: `1px solid ${isActive ? "#1B2B4A" : "#DDD4C8"}`, background: isActive ? "#1B2B4A" : "#fff", color: isActive ? "#F7F2E8" : "#8A7060", fontSize: "0.8125rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
              {cat && <span style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, display: "inline-block" }} />}
              {id === "all" ? "All questions" : cat?.label}
            </button>
          );
        })}
      </div>
      {filtered.length === 0 && <p style={{ textAlign: "center", color: "#8A7060", padding: "2rem 0" }}>No questions match your search.</p>}
      {filtered.map(cat => (
        <div key={cat.id} style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: "1px solid #DDD4C8", marginBottom: "0.75rem" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: cat.color, display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#8A7060", letterSpacing: "0.06em", textTransform: "uppercase", flex: 1 }}>{cat.label}</span>
            <span style={{ fontSize: "0.8125rem", color: "#8A7060" }}>{cat.items.length} question{cat.items.length !== 1 ? "s" : ""}</span>
          </div>
          {cat.items.map((item, i) => {
            const id = `${cat.id}-${i}`;
            const isOpen = openId === id;
            return (
              <div key={id} style={{ background: "#fff", border: `1px solid ${isOpen ? "#8C6814" : "#DDD4C8"}`, borderRadius: "8px", marginBottom: "6px", overflow: "hidden" }}>
                <button onClick={() => toggle(id)} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", cursor: "pointer", background: "none", border: "none", fontFamily: "inherit", textAlign: "left" }}>
                  <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", background: isOpen ? "#8C6814" : "#F2EDE8", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, transition: "transform 0.2s", transform: isOpen ? "rotate(90deg)" : "none" }}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M1.5 1.5L6.5 6L1.5 10.5" stroke={isOpen ? "#fff" : "#8A7060"} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#2D1F14", lineHeight: 1.5, flex: 1 }}>{item.q}</span>
                </button>
                {isOpen && <p style={{ fontSize: "0.9rem", color: "#8A7060", lineHeight: 1.75, padding: "0 16px 16px 46px" }}>{item.a}</p>}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <main style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F7F2E8", color: "#2D1F14" }}>

      {/* NAV */}
      <nav style={{ background: "#1B2B4A", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#F7F2E8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
            <img src="/logo-mark.png" alt="" style={{ width: "30px", height: "30px", objectFit: "contain" }} />
          </span>
          <div>
            <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", color: "#F7F2E8", display: "block", lineHeight: 1.1 }}>VoCordis</span>
            <span style={{ fontSize: "0.6rem", color: "#B8900A", letterSpacing: "0.12em", textTransform: "uppercase" }}>Revealing Purpose</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <a href="https://app.vocordis.com/login" style={{ color: "#F7F2E8", textDecoration: "none", fontSize: "0.9rem", padding: "0.5rem 1.25rem", border: "1px solid rgba(247,242,232,0.4)", borderRadius: "6px" }}>Sign in</a>
          <a href="https://app.vocordis.com/signup" style={{ background: "#8C6814", color: "#F7F2E8", padding: "0.5rem 1.25rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>Create a VoCordis account</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#1B2B4A", padding: "6rem 2rem", textAlign: "center" }}>
        <p style={{ color: "#B8900A", fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Revealing Purpose</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", color: "#F7F2E8", lineHeight: 1.15, maxWidth: "720px", margin: "0 auto 1rem" }}>VoCordis</h1>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#DDD4C8", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", maxWidth: "600px", margin: "0 auto 1.5rem", lineHeight: 1.5 }}>Empowering those who help others discover their calling</p>
        <div style={{ width: "60px", height: "2px", background: "#8C6814", margin: "0 auto 1.75rem" }} />
        <p style={{ color: "#B8900A", fontSize: "1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>A coaching platform that trains and equips guides - and the organizations dedicated to human formation and purpose accompaniment - with a story-based framework to help people uncover their unique purpose</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://app.vocordis.com/signup" style={{ background: "#8C6814", color: "#F7F2E8", padding: "1rem 2.25rem", borderRadius: "8px", textDecoration: "none", fontWeight: 500, fontSize: "1rem" }}>Create a VoCordis account</a>
          <a href="https://app.vocordis.com/login" style={{ border: "2px solid #F7F2E8", color: "#F7F2E8", padding: "1rem 2.25rem", borderRadius: "8px", textDecoration: "none", fontSize: "1rem" }}>Sign in to your account</a>
        </div>
      </section>

      <div style={{ height: "4px", background: "#8C6814" }} />

      {/* TWO PATHS IN */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ color: "#8C6814", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>Two ways in</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1B2B4A", textAlign: "center", marginBottom: "0.75rem" }}>For those who guide others - and for organizations dedicated to human formation</h2>
        <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 2.5rem" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
          <div style={{ background: "#fff", borderRadius: "12px", padding: "2rem", border: "1px solid #DDD4C8", borderTop: "4px solid #8C6814", display: "flex", flexDirection: "column", height: "100%" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", color: "#1B2B4A", marginBottom: "0.75rem" }}>For Guides</h3>
            <p style={{ fontSize: "0.9375rem", color: "#8A7060", lineHeight: 1.7, marginBottom: "1.5rem", flexGrow: 1 }}>Coaches, mentors, counselors, and anyone trained to accompany or guide others. Create a VoCordis account to begin your certification path and start accompanying those you serve with the Purpose Pattern methodology.</p>
            <a href="https://app.vocordis.com/signup" style={{ display: "inline-block", background: "#8C6814", color: "#F7F2E8", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: 500, fontSize: "0.9375rem", textAlign: "center", alignSelf: "flex-start" }}>Create a VoCordis account</a>
          </div>
          <div style={{ background: "#fff", borderRadius: "12px", padding: "2rem", border: "1px solid #DDD4C8", borderTop: "4px solid #1B2B4A", display: "flex", flexDirection: "column", height: "100%" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", color: "#1B2B4A", marginBottom: "0.75rem" }}>For Organizations</h3>
            <p style={{ fontSize: "0.9375rem", color: "#8A7060", lineHeight: 1.7, marginBottom: "1.5rem", flexGrow: 1 }}>Schools, universities, and organizations dedicated to human formation and purpose accompaniment. Bring the Purpose Pattern methodology to your community, and equip your own team to guide those you serve</p>
            <a href="mailto:contact@vocordis.com" style={{ display: "inline-block", border: "2px solid #1B2B4A", color: "#1B2B4A", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: 500, fontSize: "0.9375rem", textAlign: "center", alignSelf: "flex-start" }}>Talk to our team</a>
          </div>
        </div>
      </section>

      {/* WHAT IS VOCORDIS */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4.5rem 2rem", textAlign: "center" }}>
        <p style={{ color: "#8C6814", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>What is VoCordis?</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#1B2B4A", marginBottom: "1.25rem", lineHeight: 1.3 }}>
          Empowering those who help others discover their heart's calling, so purpose becomes lived reality
        </h2>
        <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 1.5rem" }} />
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#8A7060", maxWidth: "620px", margin: "0 auto 1.25rem" }}>
          A Harvard study found that 58% of young adults lack purpose or meaning, 42% suffer from anxiety or depression, and 44% feel they matter to others only a little or not at all. Behind these numbers is a simpler truth: most people have never been helped to understand who they are and what they are made to offer.
        </p>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#8A7060", maxWidth: "620px", margin: "0 auto 1.25rem" }}>
          VoCordis addresses this by training and equipping guides - coaches, mentors, and all who accompany others - along with organizations dedicated to human formation and purpose accompaniment, with a proven story-based methodology for uncovering each person's unique Purpose Pattern, and a Workbench that supports the analysis and report generation. Together, they allow guides to accompany those they serve from their story to a clear, personalized portrait of who they are and what they are made to give.
        </p>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.1875rem", color: "#1B2B4A", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
          VoCordis comes from the Latin <em>vox cordis</em>, the voice of the heart. Each person's deepest purpose is not invented or assigned. It is already written into who they are, waiting to be heard.
        </p>
      </section>

      {/* THE PURPOSE PATTERN - concise, no top arrows, no "single compass sentence" */}
      <section style={{ background: "#F2EDE8", padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ color: "#8C6814", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>The Methodology</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1B2B4A", textAlign: "center", marginBottom: "1.25rem" }}>Revealing the Purpose Pattern</h2>
          <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 1.5rem" }} />
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#8A7060", maxWidth: "620px", margin: "0 auto 3rem", textAlign: "center" }}>
            The Purpose Pattern is a personalized portrait of who a person is at their deepest level, emerging directly from their own stories. It is composed of three dimensions, woven together into an integrated statement.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            {/* Core Desires - top/center, no arrows below it */}
            <div style={{ background: "#1B2B4A", borderRadius: "12px", padding: "1.75rem 2rem", width: "100%", maxWidth: "400px", textAlign: "center", marginBottom: "1.25rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#8C6814", margin: "0 auto 0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 14S2 10 2 6a6 6 0 0112 0c0 4-6 8-6 8z" fill="#F7F2E8"/></svg>
              </div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", color: "#F7F2E8", marginBottom: "0.625rem" }}>Core Desires</h3>
              <p style={{ fontSize: "0.875rem", color: "#B8900A", lineHeight: 1.65 }}>The fundamental drives woven into who you are. They show up repeatedly across different roles and contexts, and they require no justification. They simply are.</p>
            </div>

            {/* Bottom two cards - no arrows from top, arrows going up from them */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", width: "100%", marginBottom: "0" }}>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "1.75rem", borderTop: "4px solid #8C6814" }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.125rem", color: "#8C6814", marginBottom: "0.75rem" }}>Modes of Self-Gift</h3>
                <p style={{ fontSize: "0.9rem", color: "#8A7060", lineHeight: 1.7 }}>The characteristic ways you give yourself to others. This is where your pattern becomes most visible, where your desires flow outward as gift through relationship.</p>
              </div>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "1.75rem", borderTop: "4px solid #5C1220" }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.125rem", color: "#5C1220", marginBottom: "0.75rem" }}>Optimal Environments</h3>
                <p style={{ fontSize: "0.9rem", color: "#8A7060", lineHeight: 1.7 }}>The conditions where you naturally flourish and your gifts find their fullest expression. When these are present, your capacity to contribute and grow expands.</p>
              </div>
            </div>

            {/* Converging arrows upward to integrated statement */}
            <div style={{ display: "flex", width: "100%", maxWidth: "680px", justifyContent: "space-between", padding: "0 60px", height: "52px", alignItems: "flex-end" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ transform: "rotate(180deg)" }}><path d="M5 7L0 0h10L5 7z" fill="#8C6814"/></svg>
                <div style={{ width: "2px", height: "28px", background: "#8C6814" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ transform: "rotate(180deg)" }}><path d="M5 7L0 0h10L5 7z" fill="#8C6814"/></svg>
                <div style={{ width: "2px", height: "28px", background: "#8C6814" }} />
              </div>
            </div>

            {/* Integrated statement - no "single compass sentence" */}
            <div style={{ background: "#F7F2E8", border: "2px solid #8C6814", borderRadius: "12px", padding: "1.375rem 2rem", width: "100%", maxWidth: "480px", textAlign: "center" }}>
              <p style={{ fontSize: "0.7rem", color: "#8C6814", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Integrated as</p>
              <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", color: "#1B2B4A", lineHeight: 1.6 }}>The Purpose Pattern Statement, unique to each person</p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4.5rem 2rem" }}>
        <p style={{ color: "#8C6814", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>How it works</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1B2B4A", textAlign: "center", marginBottom: "0.75rem" }}>From stories to purpose</h2>
        <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 3rem" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            { num: "1", title: "Share your fulfillment stories", desc: "Clients recall specific moments from their lives when they felt most alive, engaged, and fully themselves. These stories are the raw material of the entire process." },
            { num: "2", title: "Identify the purpose pattern", desc: "The coach, supported by the VoCordis Workbench, surfaces recurring patterns across the stories: core desires, modes of self-gift, and optimal environments." },
            { num: "3", title: "Receive your Purpose Pattern Report", desc: "The coach synthesizes the insights into a clear, personalized portrait of who the client is, a compass for life, career, and decision-making." },
          ].map((step) => (
            <div key={step.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#fff", borderRadius: "12px", padding: "1.5rem", border: "1px solid #DDD4C8" }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", color: "#DDD4C8", fontWeight: 500, lineHeight: 1, flexShrink: 0, minWidth: "2rem", textAlign: "center" }}>{step.num}</span>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "#1B2B4A", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#8A7060", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMY */}
      <section style={{ background: "#F2EDE8", padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#8C6814", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>Training & Certification</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1B2B4A", textAlign: "center", marginBottom: "0.75rem" }}>The VoCordis Academy</h2>
          <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 1.5rem" }} />
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#8A7060", maxWidth: "620px", margin: "0 auto 3rem", textAlign: "center" }}>
            A certification pathway from first exposure to expert practice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { num: "1", title: "Orientation", desc: "Understand the Purpose Pattern framework and how it works." },
              { num: "2", title: "Story Companion", desc: "Help others write and share their own fulfillment stories." },
              { num: "3", title: "Educator-Facilitator", desc: "Lead group formation sessions built on the methodology." },
              { num: "4", title: "Certified VoCordis Guide", desc: "Conduct interviews and deliver Purpose Pattern Reports, one-on-one or across a cohort." },
              { num: "5", title: "Lead VoCordis Guide", desc: "Train and supervise the next generation of guides. (By invitation)" },
            ].map((step) => (
              <div key={step.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#fff", borderRadius: "12px", padding: "1.5rem", border: "1px solid #DDD4C8" }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", color: "#DDD4C8", fontWeight: 500, lineHeight: 1, flexShrink: 0, minWidth: "2rem", textAlign: "center" }}>{step.num}</span>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "#1B2B4A", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#8A7060", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="mailto:contact@vocordis.com" style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.0625rem", color: "#1B2B4A", textDecoration: "none", borderBottom: "1px solid #8C6814" }}>Contact us for more information</a>
          </p>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section style={{ background: "#1B2B4A", padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#B8900A", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Who it is for</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F7F2E8", marginBottom: "0.75rem" }}>Built for those who walk alongside others - one on one, and at scale</h2>
          <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 3rem" }} />

          <p style={{ color: "#B8900A", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "left", marginBottom: "0.75rem" }}>Individual guides</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
            {["Life coaches", "Professional coaches", "Counselors", "Mentors"].map((role) => (
              <div key={role} style={{ background: "rgba(247,242,232,0.08)", border: "1px solid rgba(247,242,232,0.2)", borderRadius: "10px", padding: "1.25rem 1rem", color: "#F7F2E8", fontSize: "0.9375rem", fontWeight: 500 }}>{role}</div>
            ))}
          </div>

          <p style={{ color: "#B8900A", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "left", marginBottom: "0.75rem" }}>Organizations</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {["Schools & Universities", "Formation Programs"].map((role) => (
              <div key={role} style={{ background: "rgba(247,242,232,0.08)", border: "1px solid rgba(247,242,232,0.2)", borderRadius: "10px", padding: "1.25rem 1rem", color: "#F7F2E8", fontSize: "0.9375rem", fontWeight: 500 }}>{role}</div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FOUNDATION */}
      <section style={{ background: "#F7F2E8", padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.1875rem", color: "#1B2B4A", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            This work is grounded in a vision of the human person shaped by Christian anthropology and informed by positive psychology. It assumes that each person carries a unique imprint, and that the desires, gifts, and loves revealed in their stories are not accidental, but point toward a deeper meaning.
          </p>
          <p style={{ fontSize: "1rem", color: "#8A7060", lineHeight: 1.8 }}>
            We offer this work with the conviction that human beings are not only physical, but also spiritual, and that a fully lived life involves engaging both dimensions. We invite you to continue exploring where these longings come from, and what animates this work.
          </p>
          <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "2rem auto 0" }} />
        </div>
      </section>
      
      {/* CTA */}
      <section style={{ background: "#1B2B4A", padding: "5rem 2rem", textAlign: "center" }}>
        <p style={{ color: "#B8900A", fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Get started</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#F7F2E8", marginBottom: "1rem", lineHeight: 1.3 }}>Ready to reveal purpose?</h2>
        <div style={{ width: "48px", height: "2px", background: "#8C6814", margin: "0 auto 1.5rem" }} />
        <p style={{ color: "#B8900A", fontSize: "1rem", maxWidth: "440px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>Join the VoCordis community of guides and organizations helping people discover their unique calling.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://app.vocordis.com/signup" style={{ background: "#8C6814", color: "#F7F2E8", padding: "1rem 2.25rem", borderRadius: "8px", textDecoration: "none", fontWeight: 500, fontSize: "1rem" }}>Create a VoCordis account</a>
          <a href="https://app.vocordis.com/login" style={{ border: "2px solid #F7F2E8", color: "#F7F2E8", padding: "1rem 2.25rem", borderRadius: "8px", textDecoration: "none", fontSize: "1rem" }}>Sign in to your account</a>
        </div>
      </section>

     {/* FOOTER */}
      <footer style={{ background: "#121820", padding: "2.5rem 2rem", textAlign: "center" }}>
        <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F7F2E8", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
          <img src="/logo-mark.png" alt="" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
        </span>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#F7F2E8", fontSize: "1.25rem", marginBottom: "0.25rem" }}>VoCordis</p>
        <p style={{ color: "#8C6814", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Revealing Purpose</p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "1rem" }}>
          <a href="https://app.vocordis.com/login" style={{ color: "#8A7060", fontSize: "0.875rem", textDecoration: "none" }}>Sign in</a>
          <a href="https://app.vocordis.com/signup" style={{ color: "#8A7060", fontSize: "0.875rem", textDecoration: "none" }}>Create a VoCordis account</a>
          <a href="mailto:contact@vocordis.com" style={{ color: "#8A7060", fontSize: "0.875rem", textDecoration: "none" }}>Contact</a>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <a href="https://app.vocordis.com/login?password=1" style={{ color: "#444441", fontSize: "0.75rem", textDecoration: "none" }}>Sign in with a password</a>
        </div>
        <p style={{ color: "#444441", fontSize: "0.8125rem" }}>© 2026 VoCordis. All rights reserved.</p>
      </footer>

    </main>
  );
}
