
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js'; 
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/html-hint.js'; 
import 'codemirror/addon/hint/css-hint.js'; 
import 'codemirror/addon/hint/show-hint.js';



const CodeMirrorEditor = (props) => {
    const handleKeyDown = (editor, event)=>{
    if (event.key === 'Tab'||(event.ctrlKey&&event.key===' ')) {
     event.preventDefault();
    editor.showHint();
        }
    };

    return (
        <CodeMirror
            value={props.value}
            options={{
                lineNumbers: true,
                mode: props.mod, // Use props.mod for dynamic mode
                theme: 'dracula',
                autoCloseBrackets: true,
                matchBrackets: true,
                extraKeys: {
                    'Ctrl-Space': 'autocomplete', // Additional shortcut for autocomplete
                },
                hintOptions: {
                    // Customize hint appearance and behavior if needed
                    closeOnBlur: true,
                    completeSingle: false,
                },
            }}
            onBeforeChange={(editor, data, value) => {
                props.setcode(value);
            }}
            onKeyDown={handleKeyDown}
        />
    );
};

export default CodeMirrorEditor;
