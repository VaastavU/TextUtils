import React, { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState("");
    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea
                        className='form-control'
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }}
                        id='myBox'
                        rows='8'
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-3 my-3' onClick={handleUpper}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className='btn btn-primary mx-3 my-3' onClick={handleLower}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className='btn btn-primary mx-3 my-3' onClick={clearText}>
                    Clear Text
                </button>
                <button disabled={text.length === 0} className='btn btn-primary mx-3 my-3' onClick={handleCopyText}>
                    Copy Text
                </button>
                <button disabled={text.length === 0} className='btn btn-primary mx-3 my-3' onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your text summary</h2>
                <p>
                    {
                        text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length
                    }{" "}
                    words and {text.length} characters
                </p>
                <p>
                    {0.008 *
                        text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length}{" "}
                    Minutes to read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
