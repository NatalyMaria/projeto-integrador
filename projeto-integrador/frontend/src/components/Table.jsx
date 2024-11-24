import React, { useState } from "react";

const Table = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Horários</a>
          <a href="#" style={styles.navLink}>Agendamento</a>
        </nav>
      </header>

      <div style={styles.boxContainer}>

      <div style={styles.titleContainer}>
          <h1 style={styles.title}>DADOS DO CLIENTE</h1>
          <h1 style={styles.title}>DADOS DO ATENDIMENTO</h1>
        </div>

        {[1, 2, 3, 4].map((row, index) => (
          <div key={index} style={styles.box}>
            <div style={styles.boxContent}>
              <div style={styles.boxItem}>
              <img
                src="/calendar-icon.png"
                alt="Calendário"
                style={styles.icon}
              />
                <span style={styles.label}>CPF</span>
                <div style={styles.lineSeparator}></div>
                <span style={styles.label}>DATA</span>
                <div style={styles.lineSeparator}></div>
                <span style={styles.label}>HORÁRIO INÍCIO</span>
                <div style={styles.lineSeparator}></div>
                <span style={styles.label}>HORÁRIO TÉRMINO</span>
                <div style={styles.lineSeparator}></div>
                <span style={styles.label}>CRONÔMETRO</span>

                <img
                  src="/edit-icon.png"
                  alt="Editar"
                  style={styles.icon}
                />
                <img
                  src="/delete-icon.png"
                  alt="Deletar"
                  style={styles.icon}
                />
              </div>
              </div>
            <div style={styles.boxSpacing}></div>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} TimePlanner. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  container: {
    backgroundImage: "url('./background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#D4C9BE",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px 20px",
  },
  logo: {
    width: "200px",
    height: "auto",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#D4C9BE",
    textDecoration: "none",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "90%",
    marginTop: "20px",
  },
  box: {
    backgroundColor: "#46121C",
    padding: "15px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column", 
    alignItems: "flex-start",
    gap: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  },
  boxItem: {
    display: "flex",
    justifyContent: "space-between",
    color: "#D4C9BE",
    borderBottom: "1px solid #D4C9BE",
    paddingBottom: "5px",
    cursor: "pointer",
    width: "100%",
  },
  label: {
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "10px",
    alignItems: "center", 
  },
  icon: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },
  spacing: {
    height: "10px",  
  },
  boxSpacing: {
    height: "20px", 
  },
  footer: {
    marginTop: "20px",
    backgroundColor: "#130404",
    width: "100%",
    textAlign: "center",
    padding: "10px",
  },
  lineSeparator: {
    borderLeft: "1px solid #D4C9BE", 
    height: "20px",
    margin: "0 10px",
  },
};

export default Table;