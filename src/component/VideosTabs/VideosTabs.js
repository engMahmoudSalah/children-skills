import React, { useState, useEffect, useCallback } from "react";
import "./videosTabs.css";
import M1 from "../M/M1";
import M2 from "../M/M2";
import M3 from "../M/M3";
import M4 from "../M/M4";
import M5 from "../M/M5";
import M6 from "../M/M6";
import M7 from "../M/M7";
import M8 from "../M/M8";
import M9 from "../M/M9";

const SKILLS = [
  { id: "tab1", title: "ترتيب السرير", Comp: M1 },
  { id: "tab2", title: "غسيل الاسنان", Comp: M2 },
  { id: "tab3", title: "تسريح الشعر", Comp: M3 },
  { id: "tab4", title: "دخول الحمام", Comp: M4 },
  { id: "tab5", title: "لبس التيشيرت و البنطلون", Comp: M5 },
  { id: "tab6", title: "لبس الشراب و الجزمة", Comp: M6 },
  { id: "tab7", title: "الاستحمام", Comp: M7 },
  { id: "tab8", title: "الاكل", Comp: M8 },
  { id: "tab9", title: "مسح الانف", Comp: M9 },
];
const KEY = "cs_done_v1";
const NKEY = "cs_name_v1";

const readDone = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
};

const VideosTabs = () => {
  const fromHash = () => {
    const h = window.location.hash.replace("#", "");
    return SKILLS.some((s) => s.id === h) ? h : "tab1";
  };
  const [activeTab, setActiveTab] = useState(fromHash);
  const [done, setDone] = useState(readDone);
  const [kid, setKid] = useState(() => { try { return localStorage.getItem(NKEY) || ""; } catch { return ""; } });
  const saveKid = (v) => { setKid(v); try { localStorage.setItem(NKEY, v); } catch { /* ignore */ } };
  const resetAll = () => { if (window.confirm("هل تريد مسح التقدم والبدء من جديد؟")) { setDone({}); try { localStorage.removeItem(KEY); } catch { /* ignore */ } } };

  const openTab = useCallback((id) => {
    setActiveTab(id);
    try { window.history.replaceState(null, "", "#" + id); } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    const onHash = () => setActiveTab(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const toggleDone = (id) => {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const onKey = (e, index) => {
    const last = SKILLS.length - 1;
    let to = null;
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") to = index === last ? 0 : index + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") to = index === 0 ? last : index - 1;
    if (e.key === "Home") to = 0;
    if (e.key === "End") to = last;
    if (to === null) return;
    e.preventDefault();
    openTab(SKILLS[to].id);
    const el = document.getElementById("tabbtn-" + SKILLS[to].id);
    if (el) el.focus();
  };

  const count = SKILLS.filter((s) => done[s.id]).length;
  const pct = Math.round((count / SKILLS.length) * 100);

  return (
    <div className="VideosTabs">
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="d-tabs">
        <div className="tabs" id="myTabs" role="tablist" aria-orientation="vertical" aria-label="مهارات رعاية الذات">
          <div className="progress" aria-live="polite">
            <div className="progress-text">تم إتقان {count} من {SKILLS.length}</div>
            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={pct}>
              <span style={{ width: pct + "%" }} />
            </div>
          </div>
          {count > 0 && (
            <button type="button" className="reset-btn" onClick={resetAll}>مسح التقدم</button>
          )}
          {SKILLS.map((s, i) => (
            <button
              type="button"
              key={s.id}
              id={"tabbtn-" + s.id}
              role="tab"
              aria-selected={activeTab === s.id}
              aria-controls={"panel-" + s.id}
              tabIndex={activeTab === s.id ? 0 : -1}
              className={`tab ${activeTab === s.id ? "active" : ""} ${done[s.id] ? "is-done" : ""}`}
              onClick={() => openTab(s.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {done[s.id] ? "✓ " : ""}{s.title}
            </button>
          ))}
        </div>
      </div>

      {count === SKILLS.length && (
        <div className="cert-wrap">
          <div className="cert" id="cs-cert" role="region" aria-label="شهادة إتقان">
            <div className="cert-star" aria-hidden="true">★</div>
            <h3>شهادة إتقان مهارات رعاية الذات</h3>
            <p>تشهد هذه الشهادة بأن البطل</p>
            <p className="cert-name">{kid || "............"}</p>
            <p>أتقن المهارات التسع كاملة. أحسنت!</p>
          </div>
          <label className="cert-label">اسم الطفل
            <input value={kid} onChange={(e) => saveKid(e.target.value.slice(0, 40))} maxLength={40} placeholder="اكتب الاسم هنا" />
          </label>
          <button type="button" className="cert-print" onClick={() => window.print()}>طباعة الشهادة</button>
        </div>
      )}

      {SKILLS.map((s) => (
        <div
          key={s.id}
          className={`tab-content ${activeTab === s.id ? "active" : ""}`}
          id={"panel-" + s.id}
          role="tabpanel"
          aria-labelledby={"tabbtn-" + s.id}
          hidden={activeTab !== s.id}
        >
          {activeTab === s.id && (
            <>
              <s.Comp tab={" " + s.title + " "} />
              <button type="button" className="done-btn" aria-pressed={!!done[s.id]} onClick={() => toggleDone(s.id)}>
                {done[s.id] ? "✓ تم إتقان المهارة (اضغط للتراجع)" : "تم إتقان هذه المهارة"}
              </button>
              {done[s.id] && SKILLS.indexOf(s) < SKILLS.length - 1 && (
                <button type="button" className="next-btn" onClick={() => { openTab(SKILLS[SKILLS.indexOf(s) + 1].id); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  المهارة التالية: {SKILLS[SKILLS.indexOf(s) + 1].title}
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
export default VideosTabs;
