import { useState } from "react";
import "./App.css";
import RadioOptions from "./RadioOptions/RadioOptions";
import { options1, options2 } from "./utils";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import 'dayjs/locale/pt-br';


function App() {
  const [trueName, setrueName] = useState("");
  const [like, setLike] = useState("");
  const [valueDate, setValueDate] = useState("");

  const handleDate = (e) => {

    const data = new Date(e.$d);
    console.log(e)
    data.setDate(data.getDate() + 90);

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");


    setValueDate(`${dia}/${mes}/${ano}`);
  };

  return (
    <>
      <div className="container"></div>
      <div className="Title">
        Essa pagina é somente para Naninha saber quando será sua proxima injeção, responda corretamente para sebermos
        se você é a verdadeira.{" "}
      </div>
      <RadioOptions
        options={options1}
        titulo="Qual o verdadeiro nome da Nana?"
        setFunction={setrueName}
        validation="Aninha Bananinha"
      />
      {trueName === "Aninha Bananinha" ? (
        <RadioOptions
          options={options2}
          setFunction={setLike}
          titulo="Do que a Naninha mais gosta"
          validation="Pão (pq é a Naninha pão)"
        />
      ) : null}

      {like === "Pão (pq é a Naninha pão)" ? (
      
      <> 
      <div className="text-last-aplication">digite/selecione da data da ultima aplicação:</div>
       <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="pt-br">
          <DatePicker onChange={handleDate}
          />
        </LocalizationProvider>
        </>
      ) : null}

      {valueDate != 'NaN/NaN/NaN' && valueDate.length >= 10 ? <div className="injection-date">Parabens você é a verdadeira, sua proxima injeção será: {valueDate}</div> : null}
    </>
  );
}

export default App;
