import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import styles from "./Highlight.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import useToast from "../hooks/useToast";


const HighlightComponent = ({textPlane = ''}) => { 

    const mostrarAlerta = () => {

         toast("Copiado al portapapeles!", {
            position: "top-right",
            closeButton: ({ closeToast }) => (
                <button onClick={closeToast} style={{ position: "relative", top:"-15px",left:"80px", fontSize: "12px", color: "white", background: "transparent"}}>
                  ❌
                </button>
              ),
          });  

          
          
      };

    // const {showToast} = useToast();

    return( <>
        <Highlight
                theme={themes.shadesOfPurple}
                code={textPlane}
                language="tsx">
                {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style} className={styles.container}>
                    <button onClick={mostrarAlerta} className={styles.btn}>Copiar</button>
                    {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                        
                        <span>{i + 1}</span>
                        {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                        ))}
                    </div>
                    ))}
                </pre>
                )}
         </Highlight>

        <ToastContainer />
        </>)
}


export default HighlightComponent;   