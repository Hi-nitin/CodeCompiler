import React, { useState, useEffect } from 'react';
import Editor from './editor';
import tokenchecker from '../api/checktoken';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { postapi } from '../api/getpost';
import { Helmet } from 'react-helmet';  // ← Import Helmet


const MyHome = () => {
  const [loading, setLoading] = useState();
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [fullCode, setFullCode] = useState('');
  const [btnDisplay, setBtnDisplay] = useState('none');
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkMyToken = async () => {
      try {
        const getToken = await tokenchecker();
        if (getToken.message === 'Token is valid') {
          sessionStorage.setItem('id', getToken.data);
          setBtnDisplay('none');
        } else {
          setBtnDisplay(true);
        }
      } catch (err) {
        alert('Error getting token');
      }
    };
    checkMyToken();
  }, []);

  const fullHtml = `<html><head><style>${css}</style></head><body>${html}</body><script>${js}</script></html>`;
  
  const handleRun = () => {
    setFullCode(fullHtml);
  };

  const saveProject = async () => {
    if (projectName) {
      try {
        const getToken = await tokenchecker();
        if (getToken.message === 'Token is valid') {
          sessionStorage.setItem('id', getToken.data);

          if (projectName.trim() === '') {
            alert('Please enter a project name before saving.');
            return;
          }

          const sendCode = await postapi('http://localhost:7777/savemycode', { 
            projectCode: fullHtml, 
            projectName: projectName, 
            userId: getToken.data.userId 
          });

          alert(sendCode.message);
        } else {
          alert('To save project, please log in first.');
        }
      } catch (err) {
        alert('Error getting token');
      }
    } else {
      alert('Please provide a project name');
    }
  };

  return (
    <>
    <Helmet>
  <title>fdkjlhgkjfdhgghkdh</title>
  <meta 
    name="description" 
    content="fdkjlhgkjfdhgghkdh is an online code editor like JSFiddle, allowing you to write, run, and save HTML, CSS, and JavaScript. Try Keraman to create and share your web projects easily." 
  />
  <meta name="keywords" content="fdkjlhgkjfdhgghkdh, online code editor, JSFiddle alternative, run HTML CSS JS, share code online" />
</Helmet>


      <div className="app">
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>JSFiddle Cloneer</span>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="dark-input"
              style={{ marginRight: '5px' }}
            />
            <button 
              onClick={saveProject} 
              style={{ backgroundColor: '#28a745', color: '#FFFFFF', border: 'none', padding: '8px 12px', cursor: 'pointer' }}
            >
              Save Project
            </button>
          </div>
          <button 
    onClick={handleRun} 
    style={{ 
        backgroundColor: 'orange', 
        color: '#FFFFFF', 
        border: 'none', 
        padding: '12px 16px', // Increased padding for size
        fontSize: '16px',      // Optional: increase font size
        cursor: 'pointer' 
    }}
>
    Run
</button>

        </nav>

        <div className="ccc">
          <div className="sidebar">
            <button onClick={() => navigate('/myproject')} style={{ marginTop: '10px' }}>My Projects</button>
          {/* <button onClick={() => navigate('/shared-projects')} style={{ marginTop: '10px' }}>Shared Projects</button> */}
            <button style={{ display: btnDisplay }} onClick={() => navigate('/login')}>Login</button>
          </div>
          <div className="editor-grid">
            <div className="editor-section">
              <h4>HTML</h4>
              <Editor mod='xml' value={html} setcode={setHtml} />
            </div>
            <div className="editor-section">
              <h4>CSS</h4>
              <Editor mod='css' value={css} setcode={setCss} />
            </div>
            <div className="editor-section">
              <h4>JavaScript</h4>
              <Editor mod='javascript' value={js} setcode={setJs} />
            </div>
            <div className="editor-section output-section">
              <h4>Output</h4>
              <iframe 
                srcDoc={fullCode} 
                id="output" 
                title="output" 
                style={{ width: '100%', height: '100%', border: '1px solid #444' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyHome;
