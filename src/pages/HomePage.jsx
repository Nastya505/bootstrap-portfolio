import React from "react";
import Toast from "react-bootstrap/Toast";
import photo from "../images/photo2.svg";
import CardProject from "../components/card/card";
import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="container">
      <div className="flex row justify-content-center">
        <img style={{ width: "50%" }} src={photo} />

        <div
          style={{ width: "350px", marginTop: "130px", marginLeft: "-200px" }}
        >
          <Toast>
            <Toast.Header>
              <strong className="me-auto">Анастасия</strong>
              <small>11 минут назад</small>
            </Toast.Header>
            <Toast.Body className="bg-white">
              Добро пожаловать в мое портфолио, где я рассказываю о себе и
              демонстрирую свои проекты.
            </Toast.Body>
          </Toast>
        </div>
      </div>

      <h1>О себе</h1>
      <p>
        Меня зовут Анастасия, мне 19 лет и я frontend-разработчик. Учусь на 3
        курсе в Новосибиском колледже печати и информационных технологий на
        специальности "Информационные системы и программирование".
      </p>
      <p>
        Я постоянно стремлюсь к улучшению своих навыков в области frontend
        разработки. Недавно я изучила JavaScriptбиблиотеку React, применила его
        в нескольких проектах и по-настоящему влюбилась в него. Я самостоятельно
        изучаю Английский язык, регулярно выполняя практику языка. На данный
        момент мой уровень А2. Также я люблю читать детективы и играть в
        настольные игры.
      </p>
      <h1>Навыки</h1>
      <div className="d-flex justify-content-start gap-2 mt-4 mb-4">
        <Button variant="outline-dark">HTML</Button>{" "}
        <Button variant="outline-dark">CSS</Button>{" "}
        <Button variant="outline-dark">JavaScript</Button>{" "}
        <Button variant="outline-dark">React</Button>{" "}
        <Button variant="outline-dark">Tailwind</Button>{" "}
        <Button variant="outline-dark">Bootstrap</Button>{" "}
        <Button variant="outline-dark">Git</Button>{" "}
        <Button variant="outline-dark">Figma</Button>{" "}
        <Button variant="outline-dark">Next</Button>{" "}
      </div>
      <h1>Работы</h1>
      <div className="d-flex row justify-content-center gap-5 mt-4 mb-4">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Button href="/projects" variant="dark">
          смотреть ещё
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
