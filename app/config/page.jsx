"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useUser, useClerk, UserButton } from "@clerk/nextjs";
import {
  ChevronLeft, Bell, MessageSquare,
  User, Palette, Users, Shield,
  Check, Sun, Moon, Camera,
  LogOut,Lock, Loader2, X
} from "lucide-react";
import styles from "./config.module.css";

// ─── communities aca son las comunidades a las q pertenece el user─────────────────────────
const MOCK_COMMUNITIES = [
  { icon:"🐧", name:"d/Linux Scripts",    role:"Moderadora", members:1284 },
  { icon:"⚛️", name:"d/React Hub",        role:"Miembro",    members:876  },
  { icon:"🐳", name:"d/Docker",           role:"Miembro",    members:2341 },
  { icon:"🛡️", name:"Red team community", role:"Admin",      members:1284 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Toggle({ value, onChange }) {
  return (
    <button onClick={() => onChange(!value)}
      className={`${styles.toggle} ${value ? styles.toggleOn : ""}`}>
      <div className={`${styles.toggleKnob} ${value ? styles.toggleKnobOn : ""}`} />
    </button>
  );
}

function SaveBtn({ onClick, saved, loading }) {
  return (
    <button onClick={onClick} disabled={loading}
      className={`${styles.btnSave} ${saved ? styles.btnSaved : ""}`}>
      {loading
        ? <Loader2 size={14} style={{ animation:"spin 1s linear infinite" }} />
        : <Check size={14} />
      }
      {loading ? "Guardando..." : saved ? "Guardado" : "Guardar cambios"}
    </button>
  );
}

function Section({ id, icon: Icon, title, subtitle, children, danger }) {
  return (
    <div id={id} className={`${styles.section} ${danger ? styles.dangerSection : ""}`}>
      <div className={`${styles.sectionHeader} ${danger ? styles.dangerHeader : ""}`}>
        <div className={styles.sectionIcon}>
          <Icon size={18} color={danger ? "var(--red)" : "var(--orange)"} />
        </div>
        <div>
          <div className={styles.sectionTitle}>{title}</div>
          {subtitle && <div className={styles.sectionSubtitle}>{subtitle}</div>}
        </div>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  );
}

function ConfirmModal({ title, desc, confirmLabel, onConfirm, onCancel }) {
  return (
    <div className={styles.modalOverlay}
      onClick={e => { if (e.target === e.currentTarget) onCancel(); }}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <button className={styles.modalCloseBtn} onClick={onCancel}><X size={18} /></button>
        </div>
        <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.65, marginBottom:24 }}>{desc}</p>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button className={styles.btnCancel} onClick={onCancel}>Cancelar</button>
          <button className={styles.btnDangerConfirm} onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function SettingsPage() {
    const { t, i18n } = useTranslation();
  const router = useRouter();
  const { user, isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();

  const [activeSection, setActiveSection] = useState("perfil");

  // Profile
  const [firstName,      setFirstName]      = useState("");
  const [lastName,       setLastName]       = useState("");
  const [bio,            setBio]            = useState("");
  const [ubicacion,      setUbicacion]      = useState("");
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileSaved,   setProfileSaved]   = useState(false);
  const [profileError,   setProfileError]   = useState("");

  // Appearance
  const [theme,            setTheme]            = useState("light");
  const [language,         setLanguage]         = useState("es");
  const [appearanceSaved,  setAppearanceSaved]  = useState(false);

  // Communities
  const [communities, setCommunities] = useState(MOCK_COMMUNITIES);

  // Sessions
  const [sessions,        setSessions]        = useState([]);
  const [sessionsLoading, setSessionsLoading] = useState(false);
  const [revokingId,      setRevokingId]      = useState(null);

  // Modals
  const [confirmRevokeAll, setConfirmRevokeAll] = useState(false);

  // Init from Clerk user
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName   ?? "");
    //   aca configuran para que mande la bio y ubicacion a la bd, si no tiene ubicacion la tabla,
    //   eliminan el espacio de ubicacion de aqui y de la pantalla usuario
    }
  }, [user]);

  useEffect(() => {
    if (!isSignedIn || !user) return;
    const load = async () => {
      setSessionsLoading(true);
      try {
        const list = await user.getSessions();
        setSessions(list);
      } catch {
        setSessions([{
          id:"sess_current", isCurrent:true,
          latestActivity:{ deviceType:"desktop", browserName:"Chrome", city:"Ciudad de México", country:"MX" },
          lastActiveAt: new Date(),
        }]);
      } finally {
        setSessionsLoading(false);
      }
    };
    load();
  }, [isSignedIn, user]);

  const handleSaveProfile = async () => {
    setProfileLoading(true);
    setProfileError("");
    try {
      await user.update({ firstName: firstName.trim(), lastName: lastName.trim() });

      //   aca agreguen lo de la bio y ubi

      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 2500);
    } catch {
      setProfileError("No se pudo guardar. Intenta de nuevo.");
    } finally {
      setProfileLoading(false);
    }
  };

  const handleSaveAppearance = () => {
    localStorage.setItem("oh_theme",    theme);
    localStorage.setItem("oh_language", language);
    document.documentElement.setAttribute("data-theme", theme);
    // i18n.changeLanguage(language);
    setAppearanceSaved(true);
    setTimeout(() => setAppearanceSaved(false), 2500);
  };

  const handleRevokeSession = async (sessionId) => {
    setRevokingId(sessionId);
    try {
      const s = sessions.find(s => s.id === sessionId);
      await s?.revoke();
      setSessions(prev => prev.filter(s => s.id !== sessionId));
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    } finally {
      setRevokingId(null);
    }
  };

  const handleRevokeAll = async () => {
    setConfirmRevokeAll(false);
    try {
      const others = sessions.filter(s => !s.isCurrent);
      await Promise.all(others.map(s => s.revoke()));
      setSessions(prev => prev.filter(s => s.isCurrent));
    } catch (err) {
      console.error("Error:", err);
    }
  };


  const handleLeave = (name) => {
    setCommunities(prev => prev.filter(c => c.name !== name));
  };

  const NAV = [
    {
      group: "Cuenta",
      items: [
        { id:"perfil",       icon:User,   label:"Perfil y cuenta", locked:!isSignedIn },
        { id:"comunidades",  icon:Users,  label:"Comunidades",     locked:!isSignedIn },
        { id:"seguridad",    icon:Shield, label:"Seguridad",       locked:!isSignedIn },
      ],
    },
    {
      group: "Preferencias",
      items: [
        { id:"apariencia", icon:Palette, label:"Apariencia", locked:false },
      ],
    },
  ];

  const goTo = (id) => {
    if (!isSignedIn && id !== "apariencia") return;
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  const displayName = user
    ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || user.primaryEmailAddress?.emailAddress
    : "Invitado";
  const initials = ((user?.firstName?.[0] ?? "") + (user?.lastName?.[0] ?? "")).toUpperCase() || "?";

  const deviceIcon = (s) => {
    const t = s?.latestActivity?.deviceType ?? "";
    return t === "mobile" || t === "tablet" ? "📱" : "💻";
  };

  const sessionLabel = (s) => ({
    device:   s?.latestActivity?.browserName ?? "Navegador",
    location: [s?.latestActivity?.city, s?.latestActivity?.country].filter(Boolean).join(", "),
    time:     s?.lastActiveAt ? new Date(s.lastActiveAt).toLocaleString("es-MX", { dateStyle:"short", timeStyle:"short" }) : "",
  });

  const otherSessions = sessions.filter(s => !s.isCurrent);

  return (
    <div className={styles.page}>

      {/* Modals */}
      {confirmRevokeAll && (
        <ConfirmModal
          title="¿Cerrar todas las sesiones?"
          desc="Se cerrará la sesión en todos los dispositivos excepto este. Tendrás que volver a iniciar sesión en esos dispositivos."
          confirmLabel="Sí, cerrar sesiones"
          onConfirm={handleRevokeAll}
          onCancel={() => setConfirmRevokeAll(false)}
        />
      )}

      {/* ── Topbar ── */}
      <header className={styles.topbar}>
        <button onClick={() => router.back()} className={styles.backBtn}>
            Volver <ChevronLeft size={15} /> 
        </button> 
        <span className={styles.topbarTitle}>Configuración</span>
        <div className={styles.topbarRight}>

            {/* esto se habilitará despues */}
          {/* {[ MessageSquare].map((Icon, i) => (
            <button key={i} className={styles.iconBtn}><Icon size={16} /></button>
          ))} */}
          {isSignedIn
            ? <UserButton afterSignOutUrl="/" />
            : <button className={styles.btnLogin} onClick={() => router.push("/login")}>Iniciar sesión</button>
          }
        </div>
      </header>

      <div className={styles.body}>

        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            {NAV.map(group => (
              <div key={group.group} className={styles.sidebarSection}>
                <span className={styles.sidebarLabel}>{group.group}</span>
                {group.items.map(item => (
                  <button key={item.id} onClick={() => goTo(item.id)}
                    className={`${styles.navItem} ${activeSection === item.id ? styles.navItemActive : ""} ${item.locked ? styles.navItemLocked : ""}`}>
                    <item.icon size={15} />
                    {item.label}
                    {item.locked && <Lock size={11} className={styles.navLockIcon} />}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className={styles.main}>

          {/* Guest banner */}
          {!isSignedIn && isLoaded && (
            <div className={styles.guestBanner}>
              <div style={{ fontSize:28 }}>👋</div>
              <div className={styles.guestBannerText}>
                <div className={styles.guestBannerTitle}>Estás navegando sin cuenta</div>
                <div className={styles.guestBannerDesc}>
                  Inicia sesión para personalizar tu perfil, comunidades y seguridad.
                </div>
              </div>
              <button className={styles.btnLogin} onClick={() => router.push("/login")}>
                Iniciar sesión →
              </button>
            </div>
          )}

          {/* ── Perfil ── */}
          {isSignedIn && (
            <Section id="perfil" icon={User} title="Perfil y cuenta" subtitle="Tu información pública en la plataforma (funciona)">
              <div className={styles.avatarRow}>
                {user?.imageUrl
                  ? <img src={user.imageUrl} alt={displayName} className={styles.avatarImg} />
                  : <div className={styles.avatarPlaceholder}>{initials}</div>
                }
                <div className={styles.avatarInfo}>
                  <div className={styles.avatarName}>{displayName}</div>
                  <div className={styles.avatarEmail}>{user?.primaryEmailAddress?.emailAddress}</div>
                </div>
                <UserButton afterSignOutUrl="/" />
              </div>

              <div className={styles.clerkNote}>
                <Camera size={14} color="var(--orange)" />
                Foto, email y contraseña se gestionan desde el botón de cuenta (la burbuja a la derecha).
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Nombre</label>
                  <input className={styles.input} value={firstName}
                    onChange={e => setFirstName(e.target.value)} placeholder="Tu nombre" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Apellido</label>
                  <input className={styles.input} value={lastName}
                    onChange={e => setLastName(e.target.value)} placeholder="Tu apellido" />
                </div>
              </div>
{/* se habilitarán pronto
              <div className={styles.field}>
                <label className={styles.label}>Bio</label>
                <span className={styles.sublabel}>Visible en tu perfil público</span>
                <textarea className={styles.textarea} value={bio}
                  onChange={e => setBio(e.target.value.slice(0,280))} rows={3}
                  placeholder="Cuéntale a la comunidad sobre ti..." />
                <span className={styles.charCount}>{bio.length}/280</span>
              </div> */}
{/* 
              <div className={styles.field}>
                <label className={styles.label}>Ubicación</label>
                <input className={styles.input} value={ubicacion}
                  onChange={e => setUbicacion(e.target.value)} placeholder="Ciudad, País" />
              </div> */}

              {profileError && (
                <p style={{ color:"var(--red)", fontSize:13, marginBottom:12 }}>{profileError}</p>
              )}
              <div className={styles.saveRow}>
                <SaveBtn onClick={handleSaveProfile} saved={profileSaved} loading={profileLoading} />
              </div>
            </Section>
          )}

          {/* ── Apariencia ── */}
          <Section id="apariencia" icon={Palette} title="Apariencia" subtitle="Tema e idioma de la interfaz (demo)">
            <div className={styles.field}>
              <label className={styles.label}>Tema</label>
              <div className={styles.themeGrid}>
                {[
                  { id:"light", label:"Claro",  icon:<Sun  size={18} color="#F59E0B" />, top:"#ffffff", bottom:"#f7f8fc" },
                  { id:"dark",  label:"Oscuro", icon:<Moon size={18} color="#93C5FD" />, top:"#1A1F2E", bottom:"#222840" },
                ].map(t => (
                  <button key={t.id} onClick={() => setTheme(t.id)}
                    className={`${styles.themeOption} ${theme === t.id ? styles.themeOptionActive : ""}`}>
                    <div className={styles.themePreview}>
                      <div className={styles.themePreviewTop}    style={{ background:t.top }} />
                      <div className={styles.themePreviewBottom} style={{ background:t.bottom }} />
                    </div>
                    {t.icon}
                    <span className={styles.themeLabel}>{t.label}</span>
                    {theme === t.id && <Check size={12} color="var(--orange)" />}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Idioma</label>
              <select className={styles.select} value={language} onChange={e => setLanguage(e.target.value)}>
                <option value="es">🇲🇽 Español</option>
                <option value="en">🇺🇸 English</option>
              </select>
            </div>

            <div className={styles.saveRow}>
              <SaveBtn onClick={handleSaveAppearance} saved={appearanceSaved} />
            </div>
          </Section>

          {/* ── Comunidades ── */}
          {isSignedIn && (
            <Section id="comunidades" icon={Users} title="Comunidades" subtitle="Comunidades a las que perteneces (datos demo)">
              {communities.length === 0 ? (
                <div style={{ textAlign:"center", padding:"32px 0", color:"var(--muted)", fontSize:14 }}>
                  No perteneces a ninguna comunidad aún.
                </div>
              ) : communities.map(c => (
                <div key={c.name} className={styles.communityItem}>
                  <div className={styles.communityIcon}>{c.icon}</div>
                  <div>
                    <div className={styles.communityName}>{c.name}</div>
                    <span className={`${styles.communityRole} ${c.role === "Admin" || c.role === "Moderadora" ? styles.communityRoleAdmin : ""}`}>
                      {c.role}
                    </span>
                  </div>
                  <button className={styles.btnLeave} onClick={() => handleLeave(c.name)}>Salir</button>
                </div>
              ))}
            </Section>
          )}

          {/* ── Seguridad / Sesiones ── */}
          {isSignedIn && (
            <Section id="seguridad" icon={Shield} title="Sesiones activas" subtitle="Dispositivos con sesión iniciada">
              {sessionsLoading ? (
                <div style={{ display:"flex", alignItems:"center", gap:8, color:"var(--muted)", fontSize:13, padding:"12px 0" }}>
                  <Loader2 size={15} style={{ animation:"spin 1s linear infinite" }} />
                  Cargando sesiones...
                </div>
              ) : sessions.map(s => {
                const { device, location, time } = sessionLabel(s);
                const isCurrent = s.isCurrent ?? s.id === "sess_current";
                return (
                  <div key={s.id} className={styles.sessionItem}>
                    <div className={styles.sessionIcon}>{deviceIcon(s)}</div>
                    <div>
                      <div className={styles.sessionDevice}>{device}</div>
                      <div className={styles.sessionMeta}>{location && time ? " · " : ""}{time}</div>
                    </div>
                    {isCurrent
                      ? <span className={styles.sessionCurrent}>Sesión actual</span>
                      : (
                        <button className={styles.btnLeave} style={{ marginLeft:"auto" }}
                          disabled={revokingId === s.id}>
                          {revokingId === s.id
                            ? <Loader2 size={12} style={{ animation:"spin 1s linear infinite" }} />
                            : "Cerrar"
                          }
                        </button>
                      )
                    }
                  </div>
                );
              })}

              {otherSessions.length > 0 && (
                <div style={{ marginTop:16 }}>
                  <button className={styles.btnDanger} >
                    <LogOut size={14} /> Cerrar todas las demás sesiones
                  </button>
                </div>
              )}
            </Section>
          )}

        </main>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}