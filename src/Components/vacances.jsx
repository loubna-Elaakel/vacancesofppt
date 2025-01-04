import React from "react";

export default class VacancesOFPPT2025 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "fr", // Langue par défaut : Français
      vacances: [
        {
          id: 1,
          event: { fr: "Nouvel an", ar: "رأس السنة الميلادية", en: "New Year" },
          dates: "Mercredi 1 Janvier 2025",
          mois: "Janvier",
          jours: 1,
          eventDate: new Date("2025-01-01T00:00:00"),
        },
        {
          id: 2,
          event: {
            fr: "Manifeste de l'Indépendance",
            ar: "تقديم وثيقة الاستقلال",
            en: "Proclamation of Independence",
          },
          dates: "Samedi 11 Janvier 2025",
          mois: "Janvier",
          jours: 1,
          eventDate: new Date("2025-01-11T00:00:00"),
        },
        {
          id: 3,
          event: {
            fr: "Nouvel An Amazigh",
            ar: "رأس السنة الأمازيغية",
            en: "Amazigh New Year",
          },
          dates: "Mardi 14 Janvier 2025",
          mois: "Janvier",
          jours: 1,
          eventDate: new Date("2025-01-14T00:00:00"),
        },

        {
          id: 4,
          event: {
            fr: "Vacances de la mi-année de formation",
            ar: "عطلة منتصف السنة التكوينية",
            en: "Mid-Year Training Vacation",
          },
          dates: "Du Dimanche 26 Janvier 2025 au Dimanche 2 Février 2025",
          mois: "Janvier/Février",
          jours: 8,
          eventDate: new Date("2025-01-26T00:00:00"),
        },
        {
          id: 5,
          event: { fr: "Fête du travail", ar: "عيد الشغل", en: "Labour Day" },
          dates: "Jeudi 1 Mai 2025",
          mois: "Mai",
          jours: 1,
          eventDate: new Date("2025-05-01T00:00:00"),
        },
        {
          id: 6,
          event: {
            fr: "Vacances du 3ème trimestre",
            ar: "عطلة الفصل الثالث",
            en: "3rd Term Vacation",
          },
          dates: "Du Dimanche 4 Mai 2025 au Dimanche 11 Mai 2025",
          mois: "Mai",
          jours: 8,
          eventDate: new Date("2025-05-04T00:00:00"),
        },
        {
          id: 7,
          event: {
            fr: "Aid Al Fitr",
            ar: "عيد الفطر",
            en: "Eid Al-Fitr",
          },
          dates: "Du 29 Ramadan au 2 Chaoual (à confirmer)",
          mois: "Avril/Mai",
          jours: "3 ou 4",
          eventDate: new Date("2025-04-29T00:00:00"),
        },
        {
          id: 8,
          event: { fr: "Aid Al Adha", ar: "عيد الأضحى", en: "Eid Al-Adha" },
          dates: "Du 8 au 11 Dhul Hijja (à confirmer)",
          mois: "Juillet",
          jours: 4,
          eventDate: new Date("2025-07-08T00:00:00"),
        },
        {
          id: 9,
          event: {
            fr: "Anniversaire de la Marche Verte",
            ar: "ذكرى المسيرة الخضراء",
            en: "Anniversary of the Green March",
          },
          dates: "Jeudi 6 Novembre 2025",
          mois: "Novembre",
          jours: 1,
          eventDate: new Date("2025-11-06T00:00:00"),
        },
        {
          id: 10,
          event: {
            fr: "Fête de l'Indépendance",
            ar: "عيد الاستقلال",
            en: "Independence Day",
          },
          dates: "Jeudi 18 Décembre 2025",
          mois: "Décembre",
          jours: 1,
          eventDate: new Date("2025-12-18T00:00:00"),
        },
      ],
      
        
      currentDate: new Date(),
    };
  }

  // Gérer le changement de langue
  handleLangChange = (event) => {
    this.setState({ selectedLang: event.target.value });
  };

  // Calculer le temps restant avant chaque événement
  calculateTimeLeft(eventDate) {
    const now = new Date();
    const difference = eventDate - now;
    
    // Si la date est passée, afficher "Événement passé"
    if (difference <= 0) {
      return "Événement passé";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
  }

  render() {
    const { selectedLang, vacances } = this.state;

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Calendrier des Vacances OFPPT - 2025</h1>

        {/* Sélecteur de langue */}
        <div style={styles.langSelector}>
          <label htmlFor="lang-select" style={styles.label}>
            Langue :
          </label>
          <select
            id="lang-select"
            value={selectedLang}
            onChange={this.handleLangChange}
            style={styles.select}
          >
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Tableau des vacances */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Événement</th>
                <th style={styles.th}>Mois</th>
                <th style={styles.th}>Dates</th>
                <th style={styles.th}>Durée</th>
                <th style={styles.th}>Temps restant</th>
              </tr>
            </thead>
            <tbody>
              {vacances.map((vacance) => {
                const timeLeft = this.calculateTimeLeft(vacance.eventDate);
                const isPast = timeLeft === "Événement passé";
                return (
                  <tr key={vacance.id} style={isPast ? styles.pastEvent : {}}>
                    <td style={styles.td}>{vacance.event[selectedLang]}</td>
                    <td style={styles.td}>{vacance.mois}</td>
                    <td style={styles.td}>{vacance.dates}</td>
                    <td style={styles.td}>{vacance.jours}</td>
                    <td style={styles.td}>
                      <strong style={isPast ? { color: "red" } : {}}>{timeLeft}</strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    color: "Blue", // blue OFPPT
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  langSelector: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "10px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  tableContainer: {
    overflowX: "auto",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    backgroundColor: " gray",
    color: "#fff",
    fontWeight: "bold",
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ccc",
  },
  td: {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ccc",

  },
  pastEvent: {
    backgroundColor: "#f8d7da",
  },
};




