import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Aquí pones tus traducciones
// i18n.js - Bloque para Landing Page

const resources = {
  es: {
    translation: {
      "landing": {
        "nav": {
          "features": "Características",
          "about": "Acerca de",
          "login": "Entrar",
          "register": "Unirse"
        },
        "hero": {
          "title_start": "Comparte y Descubre",
          "title_accent": "Recursos de Aprendizaje",
          "subtitle": "Una plataforma colaborativa donde estudiantes, jóvenes y educadores comparten materiales educativos, tutoriales y recursos para potenciar el aprendizaje colectivo.",
          "btn_home": "Ir al inicio →",
          "btn_start": "Empezar ahora →",
          "btn_explore": "Explorar"
        },
        "features": {
          "title": "Todo lo que necesitas para aprender",
          "subtitle": "Descubre las características que hacen de OpenHands la mejor plataforma para compartir conocimiento.",
          "items": {
            "resources": {
              "title": "Recursos Diversos",
              "desc": "Accede a materiales compartidos: scripts, tutoriales y cursos completos."
            },
            "community": {
              "title": "Comunidad Activa",
              "desc": "Conecta con personas de todo el mundo y únete a comunidades de nicho."
            },
            "learning": {
              "title": "Aprendizaje Personalizado",
              "desc": "Encuentra recursos adaptados a tu nivel con recomendaciones inteligentes."
            },
            "free": {
              "title": "Acceso Gratuito",
              "desc": "Basado en compartir la fuente original. Contribuye sin restricciones."
            },
            "updates": {
              "title": "Actualizaciones Constantes",
              "desc": "Recursos siempre al día con los últimos avances de la comunidad."
            },
            "quality": {
              "title": "Calidad Garantizada",
              "desc": "Sistema de calificaciones vinculado a la reputación de los usuarios."
            }
          }
        },
        "cta": {
          "title": "¿Listo para comenzar tu viaje de aprendizaje?",
          "subtitle": "Únete a miles de estudiantes y educadores que ya están compartiendo conocimiento en OpenHands.",
          "btn_create": "Crear cuenta gratuita →",
          "btn_explore": "Explorar recursos"
        },
        "footer": {
          "tagline": "Aprende y disfruta del proceso. Comparte conocimiento con el mundo.",
          "legal": "Legal",
          "privacy": "Privacidad",
          "terms": "Términos",
          "contact": "Contacto",
          "copy": "© 2026 OpenHands. Hecho para la comunidad."
        }
      }
    }
  },
  "dashboard": {
        "sidebar": {
          "nav": {
            "home": "Inicio",
            "my_projects": "Mis Proyectos",
            "messages": "Mensajes",
            "new_post": "Nueva Publicación",
            "new_community": "Nueva Comunidad"
          },
          "communities": {
            "title": "Mis Comunidades"
          }
        },
        "feed": {
          "search_placeholder": "Buscar scripts, comunidades o #tags (#bash, #python)...",
          "tabs": {
            "for_you": "Para Ti",
            "trending": "Proyectos en Tendencia",
            "community": "Feed de Comunidad"
          },
          "post": {
            "featured": "PROYECTO DESTACADO",
            "posted_by": "Publicado por",
            "references": "Referencias",
            "comments": "Comentarios",
            "share": "Compartir",
            "save": "Guardar",
            "saved": "Guardado"
          },
          "fab_title": "Nueva publicación"
        },
        "right_sidebar": {
          "trending": {
            "title": "Temas en Tendencia"
          },
          "recommended": {
            "title": "Recomendados",
            "members": "miembros",
            "join": "Unirse"
          }
        }
      },
      "search": {
        "header_title": "Búsqueda",
        "loading": "Cargando búsqueda...",
        "input": {
          "placeholder": "Buscar scripts, comunidades o #tags..."
        },
        "tags": {
          "popular": "Tags populares",
          "active": "activos",
          "add_btn": "Añadir tag",
          "add_confirm": "+ Añadir",
          "cancel": "Cancelar",
          "custom_placeholder": "#mitag"
        },
        "filters": {
          "toggle": "Filtros",
          "community_label": "Comunidad:",
          "all_communities": "Todas",
          "sort_label": "Ordenar:",
          "clear_all": "Limpiar filtros",
          "sort_options": {
            "relevance": "Relevancia",
            "recent": "Más recientes",
            "popular": "Más populares",
            "rated": "Mejor valorados"
          }
        },
        "results": {
          "count": "resultados",
          "for": "para",
          "everything": "todo",
          "no_results_for": "Sin resultados para",
          "empty_title": "Sin resultados",
          "empty_desc": "Intenta con otros tags o términos de búsqueda"
        }
      },
      "post": {
        "topbar": {
          "back": "Volver"
        },
        "card": {
          "featured": "FEATURED PROJECT",
          "ratings": "valoraciones",
          "references": "Referencias"
        },
        "actions": {
          "comments": "comentarios",
          "save": "Guardar",
          "saved": "Guardado",
          "share": "Compartir",
          "report": "Reportar",
          "reported": "Reportado"
        },
        "composer": {
          "title": "Dejar un comentario",
          "placeholder": "¿Qué opinas sobre este proyecto? Comparte tu experiencia...",
          "rate_label": "Calificar publicación:",
          "optional": "opcional",
          "submit": "Publicar comentario"
        },
        "comments_section": {
          "title": "Comentarios",
          "sort": {
            "top": "Destacados",
            "recent": "Recientes",
            "highest_rated": "Mejor valorados"
          }
        },
        "comment": {
          "you": "Tú",
          "now": "ahora",
          "reply_btn": "Responder",
          "reply_singular": "respuesta",
          "reply_plural": "respuestas",
          "reply_placeholder": "Escribe tu respuesta...",
          "clear_rating": "quitar",
          "cancel": "Cancelar",
          "send": "Enviar"
        }
      },
      "new_post": {
        "loading": "Preparando el editor...",
        "alert": "¡Publicación enviada! Revisa la consola.",
        "blocker": {
          "title": "¡Alto ahí, explorador!",
          "desc": "Para mantener OpenHands organizado, todas las publicaciones deben pertenecer a una comunidad. Actualmente no estás unido a ninguna.",
          "btn_explore": "Explorar comunidades",
          "btn_back": "Volver atrás"
        },
        "hero": {
          "back": "Volver",
          "title": "Comparte tu conocimiento",
          "subtitle": "Aporta scripts, configuraciones o tutoriales a tu comunidad. El código de hoy es la solución de alguien mañana."
        },
        "form": {
          "details_title": "Detalles de la publicación",
          "post_title_label": "Título del recurso",
          "post_title_placeholder": "Ej. Script automatizado para Nginx + UFW...",
          "community_label": "Comunidad destino",
          "community_locked": "Fijado por la comunidad actual.",
          "body_label": "Explicación o Tutorial",
          "body_placeholder": "Explica qué hace este código, cómo instalarlo y por qué es útil...",
          "code_title": "Bloque de Código (Opcional)",
          "code_lang_label": "Lenguaje principal",
          "code_placeholder": "// Pega tu script o código aquí...",
          "extras_title": "Recursos Extras y Tags",
          "refs_label": "Enlaces de referencia (Docs, GitHub, etc.)",
          "ref_name_placeholder": "Nombre (Ej. Docs Next.js)",
          "add_ref_btn": "Añadir enlace",
          "tags_label": "Etiquetas (Presiona Enter para añadir)",
          "tags_placeholder": "#linux, #python...",
          "cancel": "Cancelar",
          "submit": "Publicar ahora"
        }
      },
      "community": {
        "topbar": {
          "back": "Volver",
          "search_placeholder": "Buscar en"
        },
        "banner": {
          "change": "Cambiar banner",
          "admin_badge": "Admin"
        },
        "header": {
          "edit": "Editar",
          "stats": {
            "members": "Miembros",
            "posts": "Posts",
            "created": "Creada"
          },
          "btn_create": "Crear post",
          "btn_join": "Unirse",
          "btn_leave": "Salir"
        },
        "tabs": {
          "posts": "Posts",
          "chat": "Chat",
          "rules": "Reglas",
          "mods": "Moderadores"
        },
        "posts_tab": {
          "results_count": "resultados",
          "for": "para",
          "empty_title": "Sin resultados",
          "empty_desc": "Intenta con otros términos"
        },
        "rules_tab": {
          "title": "Reglas de la comunidad",
          "edit": "Editar reglas"
        },
        "mods_tab": {
          "title": "Equipo de moderación",
          "msg_btn": "Mensaje",
          "roles": {
            "founder": "Fundador",
            "moderator": "Moderador"
          }
        },
        "sidebar": {
          "about_title": "Acerca de la comunidad",
          "about_members": "miembros",
          "about_posts": "posts publicados",
          "about_created": "Creada el",
          "rules_title": "Reglas rápidas",
          "see_all_rules": "Ver todas las reglas →",
          "admin_title": "Panel de Admin",
          "admin_actions": {
            "edit_info": "Editar info",
            "change_banner": "Cambiar banner",
            "manage_members": "Gestionar miembros",
            "edit_rules": "Editar reglas",
            "mod_posts": "Moderar posts"
          }
        },
        "modal_edit": {
          "title": "Editar comunidad",
          "name_label": "Nombre",
          "name_placeholder": "Nombre de la comunidad",
          "desc_label": "Descripción",
          "desc_placeholder": "Describe tu comunidad...",
          "chars": "caracteres",
          "cancel": "Cancelar",
          "save": "Guardar cambios"
        }
      },
      "new_community": {
        "hero": {
          "back": "Volver",
          "title": "Crea un nuevo espacio",
          "subtitle": "Reúne a personas con intereses similares. Las mejores herramientas y scripts nacen de la colaboración en equipo."
        },
        "form": {
          "info_title": "Información de la Comunidad",
          "name_label": "Nombre de la comunidad",
          "name_placeholder": "Ej. Linux Scripts",
          "desc_label": "Descripción",
          "desc_placeholder": "¿De qué trata este espacio? ¿Quiénes deberían unirse?...",
          "appearance_title": "Apariencia",
          "pfp_label": "URL de la foto de perfil",
          "pfp_placeholder": "https://ejemplo.com/logo.png",
          "banner_label": "URL del Banner",
          "banner_placeholder": "https://ejemplo.com/banner.png",
          "banner_helper": "Resolución recomendada: 1200x300px.",
          "tags_title": "Etiquetas",
          "tags_label": "Etiquetas (Presiona Enter para añadir)",
          "tags_placeholder": "Ej. seguridad, pentesting...",
          "tags_helper": "Añade etiquetas para ayudar a otros a encontrar tu comunidad.",
          "cancel": "Cancelar",
          "submit": "Crear Comunidad"
        }
      },
      "user_profile": {
        "topbar": {
          "back": "Volver",
          "my_profile": "Mi perfil",
          "profile_of": "Perfil de"
        },
        "header": {
          "you_badge": "Tú",
          "joined": "Se unió en",
          "edit_profile": "Editar perfil",
          "new_post": "Nueva publicación",
          "send_message": "Enviar mensaje"
        },
        "tabs": {
          "posts": "Publicaciones",
          "communities": "Comunidades",
          "saved": "Guardados"
        },
        "stats": {
          "total_xp": "XP total",
          "posts": "Publicaciones",
          "comments": "Comentarios",
          "likes_given": "Likes dados",
          "likes": "Likes"
        },
        "posts_tab": {
          "post_count": "publicaciones",
          "empty_title": "Sin publicaciones aún",
          "empty_desc": "¡Comparte tu primer recurso con la comunidad!",
          "post_card": {
            "edit": "Editar",
            "delete": "Eliminar",
            "share": "Compartir",
            "save": "Guardar",
            "saved": "Guardado"
          }
        },
        "communities_tab": {
          "members": "miembros"
        },
        "saved_tab": {
          "private_notice": "Solo tú puedes ver tus recursos guardados"
        },
        "sidebar": {
          "activity_title": "Actividad",
          "communities_title": "Comunidades"
        },
        "modals": {
          "edit": {
            "title": "Editar perfil",
            "name_label": "Nombre completo",
            "name_placeholder": "Tu nombre",
            "loc_label": "Ubicación",
            "loc_placeholder": "Ciudad, País",
            "bio_label": "Bio",
            "bio_placeholder": "Cuéntale a la comunidad sobre ti...",
            "chars": "caracteres",
            "change_pfp": "Cambiar foto de perfil",
            "pfp_desc": "Se gestiona desde tu cuenta de Clerk",
            "cancel": "Cancelar",
            "save": "Guardar cambios"
          },
          "delete": {
            "title": "¿Eliminar publicación?",
            "desc": "Esta acción no se puede deshacer. La publicación y sus comentarios se eliminarán permanentemente.",
            "cancel": "Cancelar",
            "confirm": "Sí, eliminar"
          }
        }
      },
      "config": {
        "topbar": {
          "back": "Volver",
          "title": "Configuración",
          "login_btn": "Iniciar sesión"
        },
        "nav": {
          "group_account": "Cuenta",
          "group_prefs": "Preferencias",
          "profile": "Perfil y cuenta",
          "communities": "Comunidades",
          "security": "Seguridad",
          "appearance": "Apariencia"
        },
        "guest": {
          "title": "Estás navegando sin cuenta",
          "desc": "Inicia sesión para personalizar tu perfil, comunidades y seguridad.",
          "login_btn": "Iniciar sesión →"
        },
        "profile": {
          "title": "Perfil y cuenta",
          "subtitle": "Tu información pública en la plataforma",
          "clerk_note": "Foto, email y contraseña se gestionan desde el botón de cuenta (la burbuja a la derecha).",
          "first_name": "Nombre",
          "first_name_ph": "Tu nombre",
          "last_name": "Apellido",
          "last_name_ph": "Tu apellido",
          "bio": "Bio",
          "bio_sub": "Visible en tu perfil público",
          "bio_ph": "Cuéntale a la comunidad sobre ti...",
          "location": "Ubicación",
          "location_ph": "Ciudad, País",
          "error_save": "No se pudo guardar. Intenta de nuevo."
        },
        "appearance": {
          "title": "Apariencia",
          "subtitle": "Tema e idioma de la interfaz",
          "theme_label": "Tema",
          "theme_light": "Claro",
          "theme_dark": "Oscuro",
          "lang_label": "Idioma"
        },
        "communities": {
          "title": "Comunidades",
          "subtitle": "Comunidades a las que perteneces",
          "empty": "No perteneces a ninguna comunidad aún.",
          "leave_btn": "Salir"
        },
        "security": {
          "title": "Sesiones activas",
          "subtitle": "Dispositivos con sesión iniciada",
          "loading": "Cargando sesiones...",
          "browser_fallback": "Navegador",
          "current_session": "Sesión actual",
          "close_btn": "Cerrar",
          "close_all": "Cerrar todas las demás sesiones",
          "modal_close_all": {
            "title": "¿Cerrar todas las sesiones?",
            "desc": "Se cerrará la sesión en todos los dispositivos excepto este. Tendrás que volver a iniciar sesión en esos dispositivos.",
            "confirm": "Sí, cerrar sesiones",
            "cancel": "Cancelar"
          }
        },
        "buttons": {
          "save": "Guardar cambios",
          "saving": "Guardando...",
          "saved": "Guardado"
        }
      },
    
  en: {
    translation: {
      "landing": {
        "nav": {
          "features": "Features",
          "about": "About",
          "login": "Login",
          "register": "Join"
        },
        "hero": {
          "title_start": "Share and Discover",
          "title_accent": "Learning Resources",
          "subtitle": "A collaborative platform where students, youth, and educators share educational materials, tutorials, and resources to boost collective learning.",
          "btn_home": "Go to home →",
          "btn_start": "Start now →",
          "btn_explore": "Explore"
        },
        "features": {
          "title": "Everything you need to learn",
          "subtitle": "Discover the features that make OpenHands the best platform for sharing knowledge.",
          "items": {
            "resources": {
              "title": "Diverse Resources",
              "desc": "Access shared materials: scripts, tutorials, and full courses."
            },
            "community": {
              "title": "Active Community",
              "desc": "Connect with people worldwide and join niche communities."
            },
            "learning": {
              "title": "Personalized Learning",
              "desc": "Find resources tailored to your level with smart recommendations."
            },
            "free": {
              "title": "Free Access",
              "desc": "Based on sharing the original source. Contribute without restrictions."
            },
            "updates": {
              "title": "Constant Updates",
              "desc": "Resources always up to date with the latest community advancements."
            },
            "quality": {
              "title": "Guaranteed Quality",
              "desc": "Rating system linked to user reputation."
            }
          }
        },
        "cta": {
          "title": "Ready to start your learning journey?",
          "subtitle": "Join thousands of students and educators who are already sharing knowledge on OpenHands.",
          "btn_create": "Create a free account →",
          "btn_explore": "Explore resources"
        },
        "footer": {
          "tagline": "Learn and enjoy the process. Share knowledge with the world.",
          "legal": "Legal",
          "privacy": "Privacy",
          "terms": "Terms",
          "contact": "Contact",
          "copy": "© 2026 OpenHands. Built for the community."
        }
      }
    }
  },
  "dashboard": {
        "sidebar": {
          "nav": {
            "home": "Home",
            "my_projects": "My Projects",
            "messages": "Messages",
            "new_post": "New Post",
            "new_community": "New Community"
          },
          "communities": {
            "title": "My Communities"
          }
        },
        "feed": {
          "search_placeholder": "Search scripts, communities, or #tags (#bash, #python)...",
          "tabs": {
            "for_you": "For You",
            "trending": "Trending Projects",
            "community": "Community Feed"
          },
          "post": {
            "featured": "FEATURED PROJECT",
            "posted_by": "Posted by",
            "references": "References",
            "comments": "Comments",
            "share": "Share",
            "save": "Save",
            "saved": "Saved"
          },
          "fab_title": "New post"
        },
        "right_sidebar": {
          "trending": {
            "title": "Trending Topics"
          },
          "recommended": {
            "title": "Recommended",
            "members": "members",
            "join": "Join"
          }
        }
      },
      "search": {
        "header_title": "Search",
        "loading": "Loading search...",
        "input": {
          "placeholder": "Search scripts, communities or #tags..."
        },
        "tags": {
          "popular": "Popular tags",
          "active": "active",
          "add_btn": "Add tag",
          "add_confirm": "+ Add",
          "cancel": "Cancel",
          "custom_placeholder": "#mytag"
        },
        "filters": {
          "toggle": "Filters",
          "community_label": "Community:",
          "all_communities": "All",
          "sort_label": "Sort by:",
          "clear_all": "Clear filters",
          "sort_options": {
            "relevance": "Relevance",
            "recent": "Most recent",
            "popular": "Most popular",
            "rated": "Highest rated"
          }
        },
        "results": {
          "count": "results",
          "for": "for",
          "everything": "everything",
          "no_results_for": "No results for",
          "empty_title": "No results found",
          "empty_desc": "Try different tags or search terms"
        }
      },
      "post": {
        "topbar": {
          "back": "Back"
        },
        "card": {
          "featured": "FEATURED PROJECT",
          "ratings": "ratings",
          "references": "References"
        },
        "actions": {
          "comments": "comments",
          "save": "Save",
          "saved": "Saved",
          "share": "Share",
          "report": "Report",
          "reported": "Reported"
        },
        "composer": {
          "title": "Leave a comment",
          "placeholder": "What do you think about this project? Share your experience...",
          "rate_label": "Rate post:",
          "optional": "optional",
          "submit": "Post comment"
        },
        "comments_section": {
          "title": "Comments",
          "sort": {
            "top": "Top",
            "recent": "Recent",
            "highest_rated": "Highest rated"
          }
        },
        "comment": {
          "you": "You",
          "now": "just now",
          "reply_btn": "Reply",
          "reply_singular": "reply",
          "reply_plural": "replies",
          "reply_placeholder": "Write your reply...",
          "clear_rating": "clear",
          "cancel": "Cancel",
          "send": "Send"
        }
      },
      "new_post": {
        "loading": "Preparing editor...",
        "alert": "Post submitted! Check the console.",
        "blocker": {
          "title": "Hold it right there, explorer!",
          "desc": "To keep OpenHands organized, all posts must belong to a community. You are currently not joined to any.",
          "btn_explore": "Explore communities",
          "btn_back": "Go back"
        },
        "hero": {
          "back": "Back",
          "title": "Share your knowledge",
          "subtitle": "Contribute scripts, configs, or tutorials to your community. Today's code is someone else's solution tomorrow."
        },
        "form": {
          "details_title": "Post Details",
          "post_title_label": "Resource Title",
          "post_title_placeholder": "e.g., Automated script for Nginx + UFW...",
          "community_label": "Target Community",
          "community_locked": "Locked to current community.",
          "body_label": "Explanation or Tutorial",
          "body_placeholder": "Explain what this code does, how to install it, and why it is useful...",
          "code_title": "Code Block (Optional)",
          "code_lang_label": "Primary Language",
          "code_placeholder": "// Paste your script or code here...",
          "extras_title": "Extra Resources and Tags",
          "refs_label": "Reference Links (Docs, GitHub, etc.)",
          "ref_name_placeholder": "Name (e.g., Next.js Docs)",
          "add_ref_btn": "Add link",
          "tags_label": "Tags (Press Enter to add)",
          "tags_placeholder": "#linux, #python...",
          "cancel": "Cancel",
          "submit": "Publish now"
        }
      },
      "community": {
        "topbar": {
          "back": "Back",
          "search_placeholder": "Search in"
        },
        "banner": {
          "change": "Change banner",
          "admin_badge": "Admin"
        },
        "header": {
          "edit": "Edit",
          "stats": {
            "members": "Members",
            "posts": "Posts",
            "created": "Created"
          },
          "btn_create": "Create post",
          "btn_join": "Join",
          "btn_leave": "Leave"
        },
        "tabs": {
          "posts": "Posts",
          "chat": "Chat",
          "rules": "Rules",
          "mods": "Moderators"
        },
        "posts_tab": {
          "results_count": "results",
          "for": "for",
          "empty_title": "No results",
          "empty_desc": "Try different terms"
        },
        "rules_tab": {
          "title": "Community Rules",
          "edit": "Edit rules"
        },
        "mods_tab": {
          "title": "Moderation Team",
          "msg_btn": "Message",
          "roles": {
            "founder": "Founder",
            "moderator": "Moderator"
          }
        },
        "sidebar": {
          "about_title": "About Community",
          "about_members": "members",
          "about_posts": "published posts",
          "about_created": "Created on",
          "rules_title": "Quick Rules",
          "see_all_rules": "See all rules →",
          "admin_title": "Admin Panel",
          "admin_actions": {
            "edit_info": "Edit info",
            "change_banner": "Change banner",
            "manage_members": "Manage members",
            "edit_rules": "Edit rules",
            "mod_posts": "Moderate posts"
          }
        },
        "modal_edit": {
          "title": "Edit Community",
          "name_label": "Name",
          "name_placeholder": "Community name",
          "desc_label": "Description",
          "desc_placeholder": "Describe your community...",
          "chars": "characters",
          "cancel": "Cancel",
          "save": "Save changes"
        }
      },
      "new_community": {
        "hero": {
          "back": "Back",
          "title": "Create a new space",
          "subtitle": "Bring together people with similar interests. The best tools and scripts are born from team collaboration."
        },
        "form": {
          "info_title": "Community Information",
          "name_label": "Community name",
          "name_placeholder": "e.g. Linux Scripts",
          "desc_label": "Description",
          "desc_placeholder": "What is this space about? Who should join?...",
          "appearance_title": "Appearance",
          "pfp_label": "Profile picture URL",
          "pfp_placeholder": "https://example.com/logo.png",
          "banner_label": "Banner URL",
          "banner_placeholder": "https://example.com/banner.png",
          "banner_helper": "Recommended resolution: 1200x300px.",
          "tags_title": "Tags",
          "tags_label": "Tags (Press Enter to add)",
          "tags_placeholder": "e.g. security, pentesting...",
          "tags_helper": "Add tags to help others find your community.",
          "cancel": "Cancel",
          "submit": "Create Community"
        }
      },
      "user_profile": {
        "topbar": {
          "back": "Back",
          "my_profile": "My profile",
          "profile_of": "Profile of"
        },
        "header": {
          "you_badge": "You",
          "joined": "Joined on",
          "edit_profile": "Edit profile",
          "new_post": "New post",
          "send_message": "Send message"
        },
        "tabs": {
          "posts": "Posts",
          "communities": "Communities",
          "saved": "Saved"
        },
        "stats": {
          "total_xp": "Total XP",
          "posts": "Posts",
          "comments": "Comments",
          "likes_given": "Likes given",
          "likes": "Likes"
        },
        "posts_tab": {
          "post_count": "posts",
          "empty_title": "No posts yet",
          "empty_desc": "Share your first resource with the community!",
          "post_card": {
            "edit": "Edit",
            "delete": "Delete",
            "share": "Share",
            "save": "Save",
            "saved": "Saved"
          }
        },
        "communities_tab": {
          "members": "members"
        },
        "saved_tab": {
          "private_notice": "Only you can see your saved resources"
        },
        "sidebar": {
          "activity_title": "Activity",
          "communities_title": "Communities"
        },
        "modals": {
          "edit": {
            "title": "Edit profile",
            "name_label": "Full name",
            "name_placeholder": "Your name",
            "loc_label": "Location",
            "loc_placeholder": "City, Country",
            "bio_label": "Bio",
            "bio_placeholder": "Tell the community about yourself...",
            "chars": "characters",
            "change_pfp": "Change profile picture",
            "pfp_desc": "Managed from your Clerk account",
            "cancel": "Cancel",
            "save": "Save changes"
          },
          "delete": {
            "title": "Delete post?",
            "desc": "This action cannot be undone. The post and its comments will be permanently deleted.",
            "cancel": "Cancel",
            "confirm": "Yes, delete"
          }
        }
      },
      "config": {
        "topbar": {
          "back": "Back",
          "title": "Settings",
          "login_btn": "Log in"
        },
        "nav": {
          "group_account": "Account",
          "group_prefs": "Preferences",
          "profile": "Profile & Account",
          "communities": "Communities",
          "security": "Security",
          "appearance": "Appearance"
        },
        "guest": {
          "title": "You are browsing without an account",
          "desc": "Log in to personalize your profile, communities, and security.",
          "login_btn": "Log in →"
        },
        "profile": {
          "title": "Profile & Account",
          "subtitle": "Your public information on the platform",
          "clerk_note": "Photo, email, and password are managed from the account button (the bubble on the right).",
          "first_name": "First Name",
          "first_name_ph": "Your first name",
          "last_name": "Last Name",
          "last_name_ph": "Your last name",
          "bio": "Bio",
          "bio_sub": "Visible on your public profile",
          "bio_ph": "Tell the community about yourself...",
          "location": "Location",
          "location_ph": "City, Country",
          "error_save": "Could not save. Try again."
        },
        "appearance": {
          "title": "Appearance",
          "subtitle": "Interface theme and language",
          "theme_label": "Theme",
          "theme_light": "Light",
          "theme_dark": "Dark",
          "lang_label": "Language"
        },
        "communities": {
          "title": "Communities",
          "subtitle": "Communities you belong to",
          "empty": "You do not belong to any community yet.",
          "leave_btn": "Leave"
        },
        "security": {
          "title": "Active sessions",
          "subtitle": "Devices currently logged in",
          "loading": "Loading sessions...",
          "browser_fallback": "Browser",
          "current_session": "Current session",
          "close_btn": "Close",
          "close_all": "Close all other sessions",
          "modal_close_all": {
            "title": "Close all sessions?",
            "desc": "You will be logged out on all devices except this one. You will need to log in again on those devices.",
            "confirm": "Yes, close sessions",
            "cancel": "Cancel"
          }
        },
        "buttons": {
          "save": "Save changes",
          "saving": "Saving...",
          "saved": "Saved"
        }
      },
  ja: {
    translation: {
      "landing": {
        "nav": {
          "features": "特徴",
          "about": "概要",
          "login": "ログイン",
          "register": "参加する"
        },
        "hero": {
          "title_start": "共有と発見",
          "title_accent": "学習リソース",
          "subtitle": "学生、若者、教育者が教材、チュートリアル、リソースを共有し、集団学習を促進するコラボレーションプラットフォーム。",
          "btn_home": "ホームへ →",
          "btn_start": "今すぐ始める →",
          "btn_explore": "探索する"
        },
        "features": {
          "title": "学習に必要なすべて",
          "subtitle": "OpenHandsを知識共有のための最適なプラットフォームにする特徴を発見してください。",
          "items": {
            "resources": {
              "title": "多様なリソース",
              "desc": "共有された資料（スクリプト、チュートリアル、完全なコース）にアクセスします。"
            },
            "community": {
              "title": "アクティブなコミュニティ",
              "desc": "世界中の人々とつながり、ニッチなコミュニティに参加します。"
            },
            "learning": {
              "title": "パーソナライズされた学習",
              "desc": "スマートな推奨機能で、あなたのレベルに合わせたリソースを見つけます。"
            },
            "free": {
              "title": "無料アクセス",
              "desc": "オリジナルソースの共有に基づいています。制限なく貢献できます。"
            },
            "updates": {
              "title": "継続的な更新",
              "desc": "コミュニティの最新の進歩に合わせて常に更新されるリソース。"
            },
            "quality": {
              "title": "保証された品質",
              "desc": "ユーザーの評判にリンクした評価システム。"
            }
          }
        },
        "cta": {
          "title": "学習の旅を始める準備はできましたか？",
          "subtitle": "すでにOpenHandsで知識を共有している何千人もの学生や教育者に加わりましょう。",
          "btn_create": "無料アカウントを作成 →",
          "btn_explore": "リソースを探索する"
        },
        "footer": {
          "tagline": "学び、プロセスを楽しみましょう。知識を世界と共有します。",
          "legal": "法的情報",
          "privacy": "プライバシー",
          "terms": "利用規約",
          "contact": "お問い合わせ",
          "copy": "© 2026 OpenHands. コミュニティのために作られました。"
        }
      }
    }
  },
  "dashboard": {
        "sidebar": {
          "nav": {
            "home": "ホーム",
            "my_projects": "マイプロジェクト",
            "messages": "メッセージ",
            "new_post": "新規投稿",
            "new_community": "新規コミュニティ"
          },
          "communities": {
            "title": "マイコミュニティ"
          }
        },
        "feed": {
          "search_placeholder": "スクリプト、コミュニティ、または#タグ（#bash、#python）を検索...",
          "tabs": {
            "for_you": "おすすめ",
            "trending": "トレンドプロジェクト",
            "community": "コミュニティフィード"
          },
          "post": {
            "featured": "注目のプロジェクト",
            "posted_by": "投稿者:",
            "references": "参考文献",
            "comments": "コメント",
            "share": "共有",
            "save": "保存",
            "saved": "保存済み"
          },
          "fab_title": "新規投稿"
        },
        "right_sidebar": {
          "trending": {
            "title": "トレンドトピック"
          },
          "recommended": {
            "title": "おすすめ",
            "members": "メンバー",
            "join": "参加する"
          }
        }
      },
      "search": {
        "header_title": "検索",
        "loading": "検索を読み込み中...",
        "input": {
          "placeholder": "スクリプト、コミュニティ、または#タグを検索..."
        },
        "tags": {
          "popular": "人気のタグ",
          "active": "アクティブ",
          "add_btn": "タグを追加",
          "add_confirm": "+ 追加",
          "cancel": "キャンセル",
          "custom_placeholder": "#マイタグ"
        },
        "filters": {
          "toggle": "フィルター",
          "community_label": "コミュニティ:",
          "all_communities": "すべて",
          "sort_label": "並べ替え:",
          "clear_all": "フィルターをクリア",
          "sort_options": {
            "relevance": "関連性",
            "recent": "最新",
            "popular": "人気",
            "rated": "高評価"
          }
        },
        "results": {
          "count": "件の結果",
          "for": "検索語:",
          "everything": "すべて",
          "no_results_for": "一致する結果はありません:",
          "empty_title": "結果なし",
          "empty_desc": "別のタグや検索語をお試しください"
        }
      },
      "post": {
        "topbar": {
          "back": "戻る"
        },
        "card": {
          "featured": "注目のプロジェクト",
          "ratings": "評価",
          "references": "参考文献"
        },
        "actions": {
          "comments": "コメント",
          "save": "保存",
          "saved": "保存済み",
          "share": "共有",
          "report": "報告",
          "reported": "報告済み"
        },
        "composer": {
          "title": "コメントを残す",
          "placeholder": "このプロジェクトについてどう思いますか？あなたの経験を共有してください...",
          "rate_label": "投稿を評価:",
          "optional": "任意",
          "submit": "コメントを投稿"
        },
        "comments_section": {
          "title": "コメント",
          "sort": {
            "top": "トップ",
            "recent": "最新",
            "highest_rated": "高評価"
          }
        },
        "comment": {
          "you": "あなた",
          "now": "たった今",
          "reply_btn": "返信",
          "reply_singular": "件の返信",
          "reply_plural": "件の返信",
          "reply_placeholder": "返信を入力...",
          "clear_rating": "クリア",
          "cancel": "キャンセル",
          "send": "送信"
        }
      },
      "new_post": {
        "loading": "エディタを準備中...",
        "alert": "投稿が送信されました！コンソールを確認してください。",
        "blocker": {
          "title": "ちょっと待って、エクスプローラー！",
          "desc": "OpenHandsを整理しておくため、すべての投稿はコミュニティに属している必要があります。現在、どのコミュニティにも参加していません。",
          "btn_explore": "コミュニティを探索する",
          "btn_back": "戻る"
        },
        "hero": {
          "back": "戻る",
          "title": "知識を共有する",
          "subtitle": "スクリプト、設定、またはチュートリアルをコミュニティに提供しましょう。今日のあなたのコードは、明日の誰かの解決策になります。"
        },
        "form": {
          "details_title": "投稿の詳細",
          "post_title_label": "リソースのタイトル",
          "post_title_placeholder": "例：Nginx + UFWの自動化スクリプト...",
          "community_label": "対象コミュニティ",
          "community_locked": "現在のコミュニティに固定されています。",
          "body_label": "説明またはチュートリアル",
          "body_placeholder": "このコードの機能、インストール方法、有用な理由を説明してください...",
          "code_title": "コードブロック (任意)",
          "code_lang_label": "主要言語",
          "code_placeholder": "// ここにスクリプトやコードを貼り付けてください...",
          "extras_title": "追加リソースとタグ",
          "refs_label": "参考リンク (Docs, GitHubなど)",
          "ref_name_placeholder": "名前 (例: Next.js Docs)",
          "add_ref_btn": "リンクを追加",
          "tags_label": "タグ (Enterを押して追加)",
          "tags_placeholder": "#linux, #python...",
          "cancel": "キャンセル",
          "submit": "今すぐ公開"
        }
      },
      "community": {
        "topbar": {
          "back": "戻る",
          "search_placeholder": "検索先:"
        },
        "banner": {
          "change": "バナーを変更",
          "admin_badge": "管理者"
        },
        "header": {
          "edit": "編集",
          "stats": {
            "members": "メンバー",
            "posts": "投稿",
            "created": "作成日"
          },
          "btn_create": "投稿を作成",
          "btn_join": "参加する",
          "btn_leave": "退出する"
        },
        "tabs": {
          "posts": "投稿",
          "chat": "チャット",
          "rules": "ルール",
          "mods": "モデレーター"
        },
        "posts_tab": {
          "results_count": "件の結果",
          "for": "検索語:",
          "empty_title": "結果なし",
          "empty_desc": "別のキーワードをお試しください"
        },
        "rules_tab": {
          "title": "コミュニティルール",
          "edit": "ルールを編集"
        },
        "mods_tab": {
          "title": "モデレーションチーム",
          "msg_btn": "メッセージ",
          "roles": {
            "founder": "創設者",
            "moderator": "モデレーター"
          }
        },
        "sidebar": {
          "about_title": "コミュニティについて",
          "about_members": "メンバー",
          "about_posts": "公開された投稿",
          "about_created": "作成日:",
          "rules_title": "クイックルール",
          "see_all_rules": "すべてのルールを見る →",
          "admin_title": "管理パネル",
          "admin_actions": {
            "edit_info": "情報を編集",
            "change_banner": "バナーを変更",
            "manage_members": "メンバーを管理",
            "edit_rules": "ルールを編集",
            "mod_posts": "投稿をモデレート"
          }
        },
        "modal_edit": {
          "title": "コミュニティを編集",
          "name_label": "名前",
          "name_placeholder": "コミュニティ名",
          "desc_label": "説明",
          "desc_placeholder": "コミュニティについて説明してください...",
          "chars": "文字",
          "cancel": "キャンセル",
          "save": "変更を保存"
        }
      },
      "new_community": {
        "hero": {
          "back": "戻る",
          "title": "新しいスペースを作成",
          "subtitle": "同じ興味を持つ人々を集めましょう。最高のツールやスクリプトはチームのコラボレーションから生まれます。"
        },
        "form": {
          "info_title": "コミュニティ情報",
          "name_label": "コミュニティ名",
          "name_placeholder": "例：Linux Scripts",
          "desc_label": "説明",
          "desc_placeholder": "このスペースは何についてですか？誰が参加すべきですか？...",
          "appearance_title": "外観",
          "pfp_label": "プロフィール画像のURL",
          "pfp_placeholder": "https://example.com/logo.png",
          "banner_label": "バナーのURL",
          "banner_placeholder": "https://example.com/banner.png",
          "banner_helper": "推奨解像度: 1200x300px。",
          "tags_title": "タグ",
          "tags_label": "タグ (Enterを押して追加)",
          "tags_placeholder": "例：セキュリティ、ペネトレーションテスト...",
          "tags_helper": "他の人があなたのコミュニティを見つけやすくなるようにタグを追加してください。",
          "cancel": "キャンセル",
          "submit": "コミュニティを作成"
        }
      },
      "user_profile": {
        "topbar": {
          "back": "戻る",
          "my_profile": "マイプロフィール",
          "profile_of": "プロフィール:"
        },
        "header": {
          "you_badge": "あなた",
          "joined": "参加日:",
          "edit_profile": "プロフィールを編集",
          "new_post": "新規投稿",
          "send_message": "メッセージを送信"
        },
        "tabs": {
          "posts": "投稿",
          "communities": "コミュニティ",
          "saved": "保存済み"
        },
        "stats": {
          "total_xp": "合計XP",
          "posts": "投稿",
          "comments": "コメント",
          "likes_given": "いいねした数",
          "likes": "いいね"
        },
        "posts_tab": {
          "post_count": "件の投稿",
          "empty_title": "まだ投稿がありません",
          "empty_desc": "コミュニティで最初のリソースを共有しましょう！",
          "post_card": {
            "edit": "編集",
            "delete": "削除",
            "share": "共有",
            "save": "保存",
            "saved": "保存済み"
          }
        },
        "communities_tab": {
          "members": "メンバー"
        },
        "saved_tab": {
          "private_notice": "保存したリソースはあなただけが見ることができます"
        },
        "sidebar": {
          "activity_title": "アクティビティ",
          "communities_title": "コミュニティ"
        },
        "modals": {
          "edit": {
            "title": "プロフィールを編集",
            "name_label": "氏名",
            "name_placeholder": "あなたの名前",
            "loc_label": "場所",
            "loc_placeholder": "都市、国",
            "bio_label": "自己紹介",
            "bio_placeholder": "コミュニティにあなた自身について教えてください...",
            "chars": "文字",
            "change_pfp": "プロフィール画像を変更",
            "pfp_desc": "Clerkアカウントから管理されます",
            "cancel": "キャンセル",
            "save": "変更を保存"
          },
          "delete": {
            "title": "投稿を削除しますか？",
            "desc": "この操作は元に戻せません。投稿とそのコメントは完全に削除されます。",
            "cancel": "キャンセル",
            "confirm": "はい、削除します"
          }
        }
      },
      "config": {
        "topbar": {
          "back": "戻る",
          "title": "設定",
          "login_btn": "ログイン"
        },
        "nav": {
          "group_account": "アカウント",
          "group_prefs": "設定",
          "profile": "プロフィールとアカウント",
          "communities": "コミュニティ",
          "security": "セキュリティ",
          "appearance": "外観"
        },
        "guest": {
          "title": "アカウントなしで閲覧しています",
          "desc": "プロフィール、コミュニティ、セキュリティをカスタマイズするにはログインしてください。",
          "login_btn": "ログイン →"
        },
        "profile": {
          "title": "プロフィールとアカウント",
          "subtitle": "プラットフォーム上のあなたの公開情報",
          "clerk_note": "写真、メール、パスワードはアカウントボタン（右側のバブル）から管理されます。",
          "first_name": "名",
          "first_name_ph": "あなたの名",
          "last_name": "姓",
          "last_name_ph": "あなたの姓",
          "bio": "自己紹介",
          "bio_sub": "公開プロフィールに表示されます",
          "bio_ph": "コミュニティにあなた自身について教えてください...",
          "location": "場所",
          "location_ph": "都市、国",
          "error_save": "保存できませんでした。もう一度お試しください。"
        },
        "appearance": {
          "title": "外観",
          "subtitle": "インターフェースのテーマと言語",
          "theme_label": "テーマ",
          "theme_light": "ライト",
          "theme_dark": "ダーク",
          "lang_label": "言語"
        },
        "communities": {
          "title": "コミュニティ",
          "subtitle": "あなたが所属しているコミュニティ",
          "empty": "まだどのコミュニティにも所属していません。",
          "leave_btn": "退出する"
        },
        "security": {
          "title": "アクティブなセッション",
          "subtitle": "現在ログインしているデバイス",
          "loading": "セッションを読み込み中...",
          "browser_fallback": "ブラウザ",
          "current_session": "現在のセッション",
          "close_btn": "閉じる",
          "close_all": "他のすべてのセッションを閉じる",
          "modal_close_all": {
            "title": "すべてのセッションを閉じますか？",
            "desc": "このデバイスを除くすべてのデバイスからログアウトされます。それらのデバイスでは再度ログインする必要があります。",
            "confirm": "はい、セッションを閉じます",
            "cancel": "キャンセル"
          }
        },
        "buttons": {
          "save": "変更を保存",
          "saving": "保存中...",
          "saved": "保存済み"
        }
      },

  zh: {
    translation: {
      "landing": {
        "nav": {
          "features": "功能",
          "about": "关于",
          "login": "登录",
          "register": "加入"
        },
        "hero": {
          "title_start": "分享与发现",
          "title_accent": "学习资源",
          "subtitle": "一个协作平台，学生、青年和教育工作者在这里分享教育材料、教程和资源，以促进集体学习。",
          "btn_home": "转到首页 →",
          "btn_start": "立即开始 →",
          "btn_explore": "探索"
        },
        "features": {
          "title": "您学习所需的一切",
          "subtitle": "发现让 OpenHands 成为最佳知识分享平台的功能。",
          "items": {
            "resources": {
              "title": "多样化资源",
              "desc": "访问共享材料：脚本、教程和完整课程。"
            },
            "community": {
              "title": "活跃社区",
              "desc": "与世界各地的人联系，加入细分社区。"
            },
            "learning": {
              "title": "个性化学习",
              "desc": "通过智能推荐找到适合您水平的资源。"
            },
            "free": {
              "title": "免费访问",
              "desc": "基于共享原始来源。无限制地做出贡献。"
            },
            "updates": {
              "title": "持续更新",
              "desc": "资源始终与社区的最新进展保持同步。"
            },
            "quality": {
              "title": "质量保证",
              "desc": "与用户声誉相关的评分系统。"
            }
          }
        },
        "cta": {
          "title": "准备好开始您的学习之旅了吗？",
          "subtitle": "加入成千上万已经在 OpenHands 上分享知识的学生和教育工作者的行列。",
          "btn_create": "创建免费账户 →",
          "btn_explore": "探索资源"
        },
        "footer": {
          "tagline": "学习并享受过程。与世界分享知识。",
          "legal": "法律",
          "privacy": "隐私",
          "terms": "条款",
          "contact": "联系我们",
          "copy": "© 2026 OpenHands. 为社区而建。"
        }
      },
      "dashboard": {
        "sidebar": {
          "nav": {
            "home": "首页",
            "my_projects": "我的项目",
            "messages": "消息",
            "new_post": "发布新帖",
            "new_community": "新建社区"
          },
          "communities": {
            "title": "我的社区"
          }
        },
        "feed": {
          "search_placeholder": "搜索脚本、社区或 #标签 (#bash, #python)...",
          "tabs": {
            "for_you": "为你推荐",
            "trending": "热门项目",
            "community": "社区动态"
          },
          "post": {
            "featured": "精选项目",
            "posted_by": "发布者",
            "references": "参考资料",
            "comments": "评论",
            "share": "分享",
            "save": "收藏",
            "saved": "已收藏"
          },
          "fab_title": "发布新帖"
        },
        "right_sidebar": {
          "trending": {
            "title": "热门话题"
          },
          "recommended": {
            "title": "推荐",
            "members": "成员",
            "join": "加入"
          }
        }
      },
      "search": {
        "header_title": "搜索",
        "loading": "正在加载搜索...",
        "input": {
          "placeholder": "搜索脚本、社区或 #标签..."
        },
        "tags": {
          "popular": "热门标签",
          "active": "活跃",
          "add_btn": "添加标签",
          "add_confirm": "+ 添加",
          "cancel": "取消",
          "custom_placeholder": "#我的标签"
        },
        "filters": {
          "toggle": "筛选",
          "community_label": "社区:",
          "all_communities": "全部",
          "sort_label": "排序:",
          "clear_all": "清除筛选",
          "sort_options": {
            "relevance": "相关性",
            "recent": "最新",
            "popular": "最热",
            "rated": "最高评分"
          }
        },
        "results": {
          "count": "个结果",
          "for": "搜索词:",
          "everything": "全部",
          "no_results_for": "找不到相关结果:",
          "empty_title": "暂无结果",
          "empty_desc": "请尝试其他标签或搜索词"
        }
      },
      "post": {
        "topbar": {
          "back": "返回"
        },
        "card": {
          "featured": "精选项目",
          "ratings": "评价",
          "references": "参考资料"
        },
        "actions": {
          "comments": "评论",
          "save": "收藏",
          "saved": "已收藏",
          "share": "分享",
          "report": "举报",
          "reported": "已举报"
        },
        "composer": {
          "title": "发表评论",
          "placeholder": "你觉得这个项目怎么样？分享你的经验...",
          "rate_label": "评价帖子:",
          "optional": "可选",
          "submit": "发表评论"
        },
        "comments_section": {
          "title": "评论",
          "sort": {
            "top": "最热",
            "recent": "最新",
            "highest_rated": "最高评分"
          }
        },
        "comment": {
          "you": "你",
          "now": "刚刚",
          "reply_btn": "回复",
          "reply_singular": "条回复",
          "reply_plural": "条回复",
          "reply_placeholder": "写下你的回复...",
          "clear_rating": "清除",
          "cancel": "取消",
          "send": "发送"
        }
      },
      "new_post": {
        "loading": "正在准备编辑器...",
        "alert": "帖子已提交！请检查控制台。",
        "blocker": {
          "title": "等一下，探索者！",
          "desc": "为了保持 OpenHands 的井然有序，所有帖子都必须属于一个社区。您目前尚未加入任何社区。",
          "btn_explore": "探索社区",
          "btn_back": "返回"
        },
        "hero": {
          "back": "返回",
          "title": "分享你的知识",
          "subtitle": "为你的社区贡献脚本、配置或教程。你今天的代码，就是别人明天的解决方案。"
        },
        "form": {
          "details_title": "帖子详情",
          "post_title_label": "资源标题",
          "post_title_placeholder": "例如：Nginx + UFW 的自动化脚本...",
          "community_label": "目标社区",
          "community_locked": "已锁定至当前社区。",
          "body_label": "说明或教程",
          "body_placeholder": "解释这段代码的作用、安装方法及其用途...",
          "code_title": "代码块（可选）",
          "code_lang_label": "主要语言",
          "code_placeholder": "// 在此处粘贴你的脚本或代码...",
          "extras_title": "其他资源和标签",
          "refs_label": "参考链接（文档、GitHub 等）",
          "ref_name_placeholder": "名称（例如：Next.js 文档）",
          "add_ref_btn": "添加链接",
          "tags_label": "标签（按 Enter 键添加）",
          "tags_placeholder": "#linux, #python...",
          "cancel": "取消",
          "submit": "立即发布"
        }
      },
      "community": {
        "topbar": {
          "back": "返回",
          "search_placeholder": "搜索"
        },
        "banner": {
          "change": "更改横幅",
          "admin_badge": "管理员"
        },
        "header": {
          "edit": "编辑",
          "stats": {
            "members": "成员",
            "posts": "帖子",
            "created": "创建于"
          },
          "btn_create": "发布帖子",
          "btn_join": "加入",
          "btn_leave": "退出"
        },
        "tabs": {
          "posts": "帖子",
          "chat": "聊天",
          "rules": "规则",
          "mods": "版主"
        },
        "posts_tab": {
          "results_count": "个结果",
          "for": "搜索词：",
          "empty_title": "暂无结果",
          "empty_desc": "请尝试其他关键词"
        },
        "rules_tab": {
          "title": "社区规则",
          "edit": "编辑规则"
        },
        "mods_tab": {
          "title": "管理团队",
          "msg_btn": "发消息",
          "roles": {
            "founder": "创始人",
            "moderator": "版主"
          }
        },
        "sidebar": {
          "about_title": "关于社区",
          "about_members": "名成员",
          "about_posts": "篇帖子",
          "about_created": "创建于",
          "rules_title": "快速规则",
          "see_all_rules": "查看所有规则 →",
          "admin_title": "管理员面板",
          "admin_actions": {
            "edit_info": "编辑信息",
            "change_banner": "更改横幅",
            "manage_members": "管理成员",
            "edit_rules": "编辑规则",
            "mod_posts": "管理帖子"
          }
        },
        "modal_edit": {
          "title": "编辑社区",
          "name_label": "名称",
          "name_placeholder": "社区名称",
          "desc_label": "描述",
          "desc_placeholder": "描述你的社区...",
          "chars": "个字符",
          "cancel": "取消",
          "save": "保存更改"
        }
      },
      "new_community": {
        "hero": {
          "back": "返回",
          "title": "创建一个新空间",
          "subtitle": "把有共同兴趣的人聚集在一起。最好的工具和脚本诞生于团队协作。"
        },
        "form": {
          "info_title": "社区信息",
          "name_label": "社区名称",
          "name_placeholder": "例如：Linux Scripts",
          "desc_label": "描述",
          "desc_placeholder": "这个空间是关于什么的？谁应该加入？...",
          "appearance_title": "外观",
          "pfp_label": "个人资料图片 URL",
          "pfp_placeholder": "https://example.com/logo.png",
          "banner_label": "横幅 URL",
          "banner_placeholder": "https://example.com/banner.png",
          "banner_helper": "推荐分辨率：1200x300px。",
          "tags_title": "标签",
          "tags_label": "标签（按 Enter 键添加）",
          "tags_placeholder": "例如：安全、渗透测试...",
          "tags_helper": "添加标签以帮助其他人找到您的社区。",
          "cancel": "取消",
          "submit": "创建社区"
        }
      },
      "user_profile": {
        "topbar": {
          "back": "返回",
          "my_profile": "我的主页",
          "profile_of": "的主页"
        },
        "header": {
          "you_badge": "你",
          "joined": "加入于",
          "edit_profile": "编辑个人资料",
          "new_post": "发布新帖",
          "send_message": "发送消息"
        },
        "tabs": {
          "posts": "帖子",
          "communities": "社区",
          "saved": "收藏"
        },
        "stats": {
          "total_xp": "总 XP",
          "posts": "帖子",
          "comments": "评论",
          "likes_given": "给出的点赞",
          "likes": "点赞"
        },
        "posts_tab": {
          "post_count": "篇帖子",
          "empty_title": "暂无帖子",
          "empty_desc": "与社区分享你的第一个资源！",
          "post_card": {
            "edit": "编辑",
            "delete": "删除",
            "share": "分享",
            "save": "收藏",
            "saved": "已收藏"
          }
        },
        "communities_tab": {
          "members": "名成员"
        },
        "saved_tab": {
          "private_notice": "只有你能看到你收藏的资源"
        },
        "sidebar": {
          "activity_title": "活动",
          "communities_title": "社区"
        },
        "modals": {
          "edit": {
            "title": "编辑个人资料",
            "name_label": "全名",
            "name_placeholder": "你的名字",
            "loc_label": "位置",
            "loc_placeholder": "城市，国家",
            "bio_label": "简介",
            "bio_placeholder": "向社区介绍一下你自己...",
            "chars": "个字符",
            "change_pfp": "更改个人资料图片",
            "pfp_desc": "从您的 Clerk 帐户管理",
            "cancel": "取消",
            "save": "保存更改"
          },
          "delete": {
            "title": "删除帖子？",
            "desc": "此操作无法撤消。帖子及其评论将被永久删除。",
            "cancel": "取消",
            "confirm": "是的，删除"
          }
        }
      },
      "config": {
        "topbar": {
          "back": "返回",
          "title": "设置",
          "login_btn": "登录"
        },
        "nav": {
          "group_account": "账户",
          "group_prefs": "偏好设置",
          "profile": "个人资料与账户",
          "communities": "社区",
          "security": "安全",
          "appearance": "外观"
        },
        "guest": {
          "title": "您正在以游客身份浏览",
          "desc": "登录以个性化您的个人资料、社区和安全性。",
          "login_btn": "登录 →"
        },
        "profile": {
          "title": "个人资料与账户",
          "subtitle": "您在平台上的公开信息",
          "clerk_note": "照片、电子邮件和密码均可通过账户按钮（右侧的气泡）进行管理。",
          "first_name": "名字",
          "first_name_ph": "你的名字",
          "last_name": "姓氏",
          "last_name_ph": "你的姓氏",
          "bio": "简介",
          "bio_sub": "在你的公开个人资料上可见",
          "bio_ph": "向社区介绍一下你自己...",
          "location": "位置",
          "location_ph": "城市，国家",
          "error_save": "无法保存。请重试。"
        },
        "appearance": {
          "title": "外观",
          "subtitle": "界面主题和语言",
          "theme_label": "主题",
          "theme_light": "浅色",
          "theme_dark": "深色",
          "lang_label": "语言"
        },
        "communities": {
          "title": "社区",
          "subtitle": "您所属的社区",
          "empty": "您尚未加入任何社区。",
          "leave_btn": "退出"
        },
        "security": {
          "title": "活动会话",
          "subtitle": "当前已登录的设备",
          "loading": "正在加载会话...",
          "browser_fallback": "浏览器",
          "current_session": "当前会话",
          "close_btn": "关闭",
          "close_all": "关闭所有其他会话",
          "modal_close_all": {
            "title": "关闭所有会话？",
            "desc": "您将从除此设备之外的所有设备上注销。您需要在那些设备上重新登录。",
            "confirm": "是的，关闭会话",
            "cancel": "取消"
          }
        },
        "buttons": {
          "save": "保存更改",
          "saving": "保存中...",
          "saved": "已保存"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador o el guardado
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si algo falla
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;