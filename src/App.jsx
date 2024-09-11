import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [languageData, setLanguageData] = useState("tr");
  const [systemLanguage, setSystemLanguage] = useState();

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", {
        en: {
          header: {
            mode: "Dark Mode",
            language: "TÜRKÇE'YE GEÇ",
          },
          section: {
            greeting: "Hİ! 👋",
            intro:
              "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
            profil_img: "./public/foto.png",
            sectionInfo:
              " Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your team ->pratamaiosi@gmail.com  ",
          },

          skils: {
            title: "Skills",
            js: {
              id: "1",
              skilName: "JAVASCRIPT",
              skilImg: "./public/js-logo 1.png",
            },
            react: {
              id: "2",
              skilName: "REACT",
              skilImg: "./public/react-logo.png",
            },
            redux: {
              id: "3",
              skilName: "REDUX",
              skilImg: "./public/redux-logo.png",
            },
            node: {
              id: "4",
              skilName: "NODE",
              skilImg: "./public/node-logo.png",
            },
            vsCode: {
              id: "5",
              skilName: "VS CODE",
              skilImg: "./public/vscode-logo.png",
            },
            figma: {
              id: "6",
              skilName: "FIGMA",
              skilImg: "./public/figma-logo 1.png",
            },
          },
          profile: {
            title: "Profile",
            cardTitle: "Basic Information",
            date: "Birthday",
            city: "City",
            educationStatus: "Education Status",
            preferredRol: "Preferred Role",
            aboutTitle: "About Me",
            aboutContent:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          },
          projects: {
            projectTitle: "Projects",
            projectCard_1: {
              id: "1",
              title: "Random Jokes",
              explain:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
              navigation: "View on Github",
              appNavi: "Go to app",
              img: "./public/Group 103.png",
            },
            projectCard_2: {
              id: "2",
              title: "Are you bored",
              explain:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
              navigation: "View on Github",
              appNavi: "Go to app",
              img: "./public/Group 104.png",
            },
          },
          footer: {
            footerTitle: "Let’s work together on your next product.",
            footerNav_1: "Github",
            footerNav_2: "Personel Blog",
            footerNav_3: "Linkedin",
            footerNav_4: "Email",
          },
        },
        tr: {
          header: {
            mode: "Ligth Mode",
            language: "Switch to English",
          },
          section: {
            greeting: "SELAM! 👋",
            intro:
              "Ben Almila. Tam yığın geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünleri tasarlayabilirim. Tanışalım!",
            profil_img: "./public/foto.png",
            sectionInfo:
              " Şu anda UX, UI ve Web Tasarım Projeleri için Serbest çalışıyorum. Beni ekibinize katılmaya davet edin ->pratamaiosi@gmail.com  ",
          },
          skils: {
            title: "Yetenekler",
            js: {
              id: "1",
              skilName: "JAVASCRIPT",
              skilImg: "./public/js-logo 1.png",
            },
            react: {
              id: "2",
              skilName: "REACT",
              skilImg: "./public/react-logo.png",
            },
            redux: {
              id: "3",
              skilName: "REDUX",
              skilImg: "./public/redux-logo.png",
            },
            node: {
              id: "4",
              skilName: "NODE",
              skilImg: "./public/node-logo.png",
            },
            vsCode: {
              id: "5",
              skilName: "VS CODE",
              skilImg: "./public/vscode-logo.png",
            },
            figma: {
              id: "6",
              skilName: "FIGMA",
              skilImg: "./public/figma-logo 1.png",
            },
          },
          profile: {
            title: "Profil",
            cardTitle: "Basit Bilgiler",
            date: "Doğum Günü",
            city: "Şehir",
            educationStatus: "Eğitim Durumu",
            preferredRol: "Tercih Ettiği Rol",
            aboutTitle: "Hakkımda",
            aboutContent:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          },
          projects: {
            projectTitle: "Projeler",
            projectCard_1: {
              id: "1",
              title: "Random Jokes",
              explain:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
              navigation: "Github'ı Görüntüle",
              appNavi: "Uygulamaya Git",
              img: "./public/Group 103.png",
            },
            projectCard_2: {
              id: "2",
              title: "Sıkıldın Mı ?",
              explain:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
              navigation: "Github'ı Görüntüle",
              appNavi: "Uygulamaya Git",
              img: "./public/Group 104.png",
            },
          },
          footer: {
            footerTitle: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
            footerNav_1: "Github",
            footerNav_2: "Kişisel Blog",
            footerNav_3: "Linkedin",
            footerNav_4: "Email",
          },
        },
      })
      .then((response) => {
        if (languageData === "en") {
          setSystemLanguage(response.data.en);
        } else {
          setSystemLanguage(response.data.tr);
        }
      })
      .catch((err) => console.log(err));
  }, [languageData]);

  return (
    <div className='dark:bg-black'>
      <Switch>
        <Route exact path='/'>
          <Main
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            languageData={languageData}
            setLanguageData={setLanguageData}
            systemLanguage={systemLanguage}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
