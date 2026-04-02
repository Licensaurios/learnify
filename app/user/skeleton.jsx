export function PostCardSkeleton({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`post-card ${i === 0 ? "post-card--featured" : ""} post-card--skeleton`}>

          {i === 0 && (
            <div className="post-card__featured-badge">
              <span className="sk" style={{ width: 12, height: 12, borderRadius: "50%" }} />
              <span className="sk" style={{ width: 120, height: 11 }} />
            </div>
          )}

          <div className="post-card__body">
            <div className="post-card__votes">
              <span className="sk" style={{ width: 28, height: 28, borderRadius: 8 }} />
              <span className="sk" style={{ width: 22, height: 13 }} />
              <span className="sk" style={{ width: 28, height: 28, borderRadius: 8 }} />
            </div>

            <div className="post-card__content">
              <div className="post-card__meta">
                <span className="sk" style={{ width: 68, height: 12 }} />
                <span className="sk" style={{ width: 4, height: 4, borderRadius: "50%" }} />
                <span className="sk" style={{ width: 100, height: 12 }} />
                <span className="sk" style={{ width: 4, height: 4, borderRadius: "50%" }} />
                <span className="sk" style={{ width: 48, height: 12 }} />
              </div>

              <div>
                <span className="sk" style={{ width: "80%", height: 20, display: "block", marginBottom: 8 }} />
                {i === 0 && <span className="sk" style={{ width: "52%", height: 20, display: "block" }} />}
              </div>

              {i === 0 && (
                <div className="post-card__code">
                  <div className="post-card__code-header">
                    <div className="post-card__code-dots">
                      {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                        <div key={c} className="post-card__code-dot" style={{ background: c, opacity: 0.6 }} />
                      ))}
                    </div>
                    <span className="sk sk-dark" style={{ width: 50, height: 11 }} />
                  </div>
                  <div className="post-card__code-wrapper">
                    {[78, 58, 68, 42].map((w, li) => (
                      <span key={li} className="sk sk-dark" style={{ width: `${w}%`, height: 12, display: "block", marginBottom: 8 }} />
                    ))}
                  </div>
                </div>
              )}

              {i === 0 && (
                <div className="post-card__refs">
                  <div className="post-card__refs-header">
                    <span className="sk" style={{ width: 14, height: 14, borderRadius: 3 }} />
                    <span className="sk" style={{ width: 72, height: 12 }} />
                  </div>
                  {[52, 38].map((w, ri) => (
                    <div key={ri} className="post-card__ref-item">
                      <span className="sk" style={{ width: 13, height: 13, borderRadius: 3, flexShrink: 0 }} />
                      <span className="sk" style={{ width: `${w}%`, height: 12 }} />
                    </div>
                  ))}
                </div>
              )}

              <div className="post-card__tags">
                {[56, 72, 48].map((w, ti) => (
                  <span key={ti} className="sk" style={{ width: w, height: 26, borderRadius: 20 }} />
                ))}
                <span className="sk" style={{ width: 38, height: 22, borderRadius: 12, marginLeft: "auto" }} />
              </div>

              <div className="post-card__actions">
                {[108, 72, 72].map((w, ai) => (
                  <span key={ai} className="sk" style={{ width: w, height: 30, borderRadius: 8 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}