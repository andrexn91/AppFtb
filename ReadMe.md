Web App - Prenotazioni Partite di Calcetto
Descrizione

La web app consente agli utenti di gestire e prenotare partite di calcetto. Gli utenti possono autenticarsi, visualizzare una lista di partite disponibili e prenotare un posto. Gli amministratori hanno la possibilità di creare e modificare le partite. L’app è progettata per semplificare l’organizzazione e garantire un’esperienza intuitiva.
User Story

    Utente Normale:
        Si registra e accede al sistema.
        Visualizza un elenco di partite di calcetto disponibili.
        Può prenotare un posto e annullare le proprie prenotazioni.
        Accede a una dashboard personale con un riepilogo delle sue prenotazioni.

    Amministratore:
        Accede come amministratore.
        Può creare, modificare o eliminare partite.
        Visualizza una lista delle partite esistenti con i dettagli dei partecipanti.

Funzionalità

    Autenticazione:
        Registrazione e login con controllo delle credenziali.
        Sistema a ruoli: utente e amministratore.

    Gestione Profilo Utente:
        Ogni utente ha una pagina personale per:
            Caricare o aggiornare una foto profilo.
            Specificare il ruolo preferito (es. portiere, attaccante, difensore, ecc.).
            Aggiornare le proprie informazioni personali (es. nome visualizzato).

    Gestione Partite:
        Visualizzazione elenco partite.
        Creazione e modifica (solo amministratore).
        Dettagli per ogni partita:
            Data e orario.
            Luogo.
            Numero massimo di partecipanti.

    Prenotazioni:
        Prenotazione di un posto per sé.
        Possibilità di annullare la prenotazione.
        Blocco automatico delle prenotazioni al raggiungimento del limite massimo.

    Dashboard:
        Pagina personale con riepilogo delle prenotazioni dell'utente.

    Lingua:
        Interfaccia in italiano.

Changelog & Roadmap

    Versione 1.0:
        Autenticazione utenti.
        Dashboard personale.
        Gestione partite e prenotazioni di base.

    Prossime Funzionalità:
        Notifiche email/sms per conferma prenotazione.
        Sistema di valutazione o feedback per le partite.
        Supporto multilingua.
        Integrazione con Google Maps per i luoghi.


/calcetto-app
├── /public
│   ├── /images
│   │   └── default-avatar.png   # Immagine di default per il profilo utente
│   ├── favicon.ico
│   └── index.html
├── /src
│   ├── /components
│   │   ├── Navbar.tsx          # Barra di navigazione
│   │   ├── Footer.tsx          # Footer della pagina
│   │   ├── ProfileCard.tsx     # Componente per mostrare le info del profilo
│   │   ├── MatchList.tsx       # Lista partite disponibili
│   │   ├── MatchDetails.tsx    # Dettagli di una partita
│   │   ├── AdminPanel.tsx      # Pannello di amministrazione (solo admin)
│   │   └── Dashboard.tsx       # Dashboard utente
│   ├── /pages
│   │   ├── index.tsx           # Homepage
│   │   ├── login.tsx           # Pagina di login
│   │   ├── signup.tsx          # Pagina di registrazione
│   │   ├── profile.tsx         # Pagina del profilo utente
│   │   ├── matches.tsx         # Pagina lista partite
│   │   ├── match/[id].tsx      # Dettagli di una partita specifica
│   │   └── admin.tsx           # Pannello di amministrazione
│   ├── /styles
│   │   ├── globals.css         # Stile globale
│   │   ├── Navbar.module.css   # Stile per la navbar
│   │   ├── Profile.module.css  # Stile per la pagina del profilo
│   │   └── Matches.module.css  # Stile per la lista partite
│   ├── /utils
│   │   ├── api.ts              # API per interazioni con il backend
│   │   ├── auth.ts             # Funzioni per autenticazione
│   │   └── validators.ts       # Funzioni di validazione (es. form)
│   ├── /types
│   │   ├── user.ts             # Tipi definiti per l'utente
│   │   └── match.ts            # Tipi definiti per le partite
│   └── App.tsx                 # Entry point dell'app
├── /tests
│   ├── ProfilePage.test.tsx    # Test per la pagina del profilo
│   ├── MatchList.test.tsx      # Test per la lista partite
│   └── Auth.test.tsx           # Test per login/registrazione
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
