import React, {useState} from 'react'

// önerilen başlangıç stateleri
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 //  "B" nin bulunduğu indexi

export default function AppFunctional(props) {

  const [index, setIndex] = useState(initialIndex);
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [steps, setSteps] = useState(initialSteps);

  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

  function getXY() {
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
    setIndex(initialIndex);
    setMessage(initialMessage);
    setEmail(initialEmail);
    setSteps(initialSteps);
  }

  function sonrakiIndex(targetIndex) {
    setIndex(targetIndex);
    setSteps(steps + 1);
    setMessage(initialMessage);
  }

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
    const yon = evt.target.id;
    console.log("ilerle", yon);
    
    /*if (yon === "left") {
      if(index % 3 === 0) 
      {
        setMessage("Sola gidemezsiniz")
      } else {
        setIndex(index - 1);
      }
      
    }

    */

    switch (yon) {
      case "left":
        if(index % 3 === 0) 
      {
        setMessage("Sola gidemezsiniz")
      } else {
        sonrakiIndex(index - 1);
      }
      break;

      case "up":
        if(index < 3) 
      {
        setMessage("Yukarıya gidemezsiniz")
      } else {
        sonrakiIndex(index - 3);
      }
      break;

      case "right":
        if(index % 3 === 2) 
      {
        setMessage("Sağa gidemezsiniz")
      } else {
        sonrakiIndex(index + 1);
      }
      break;

      case "down":
        if(index > 5) 
      {
        setMessage("Aşağıya gidemezsiniz")
      } else {
        sonrakiIndex(index + 3);
      }
      break;
    }

  }

    /*if (yon === "up") {
      setIndex(index - 3);
    }

    if (yon === "right") {
      setIndex(index + 1);
    }

    if (yon === "down") {
      setIndex(index + 3);
    }
  }
  */
  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar (2, 2)</h3>
        <h3 id="steps">{steps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button onClick={ilerle} id="left">SOL</button>
        <button onClick={ilerle} id="up">YUKARI</button>
        <button onClick={ilerle} id="right">SAĞ</button>
        <button onClick={ilerle} id="down">AŞAĞI</button>
        <button onClick={reset} id="reset">reset</button>
      </div>
      <form>
        <input value={email} id="email" type="email" placeholder="email girin" onChange={(evt) => setEmail(evt.target.value)}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
