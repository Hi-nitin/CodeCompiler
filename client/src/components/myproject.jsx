import React, { useEffect, useState } from "react";
import { getapi } from "../api/getpost";
import './MyProject.css';

const MyProject = () => {
    const [projects, setProjects] = useState([]);
    const [iframeSrc, setIframeSrc] = useState(null);
    const [projectCode, setProjectCode] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getapi('http://localhost:7777/myproject');
                setProjects(response.projects); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    const handleSeeProject = (project) => {
        setIframeSrc(project.projectCode);
        setProjectCode(project.projectCode);
    };

    return (
        <div className="my-project-container">
            <div className="project-table-container">
                <h1>My Projects</h1>
                {projects.length ? (
                    <table className="project-table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project._id}>
                                    <td>{project.projectName}</td>
                                    <td>{new Date(project.createdAt).toLocaleString()}</td>
                                    <td>
                                        <button className="see-project-button" onClick={() => handleSeeProject(project)}>
                                            See Project
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No projects found.</p>
                )}
            </div>

            <div className="code-display-container">
                {projectCode && (
                    <pre className="project-code">
                        <code>{projectCode}</code>
                    </pre>
                )}
            </div>

            <div className="iframe-container">
                {iframeSrc && (
                    <iframe
                        srcDoc={iframeSrc}
                        title="Project Preview"
                        className="project-iframe"
                    />
                )}
            </div>
        </div>
    );
};

export default MyProject;
