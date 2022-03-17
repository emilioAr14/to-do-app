import React from "react";

export function InputAnimation(href) {
    React.useEffect(() => {  
        // Input animation
        window.addEventListener("click", ({ target }) => {
            if (target.nodeName === "INPUT") {
                href.current.style.setProperty("--visible", "1")
            } else {
                href.current.style.setProperty("--visible", "0")
            }
      })
    },[])
}