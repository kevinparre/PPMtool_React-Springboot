import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";
import  "./ProjectTasks/card.css";



class Backlog extends Component {
  render() {
    const { project_tasks_prop } = this.props;

    const tasks = project_tasks_prop.map(project_task => (
      <ProjectTask key={project_task.id} project_task={project_task} />
    ));

    let planning = [];
    let designing = [];
    let developing = [];
    let testing = [];
    let deploying = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === "Planning") {
        planning.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "Designing") {
        designing.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "Developing") {
        developing.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "Testing") {
        testing.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "Deploying") {
        deploying.push(tasks[i]);
      }
    }

    return (
      <div className="container">
      
      <div class="horizontal-scrollable">
       
        <table class="table table-bordered  border-primary">
        <tr>
      <th>
          <div className="col-md-4 col-lg-12">
            <div className="card text-center mb-4">
              <div className="card-header bg-info text-white">
                <h3>Planning</h3>
              </div>
            </div>
            {planning}
            
          </div>
          </th>
          <th>
          <div className="col-md-4 col-lg-12">
            <div className="card text-center mb-4">
              <div className="card-header bg-info text-white">
                <h3>Designing</h3>
              </div>
            </div>
            {designing}
          </div>
          </th>
          <th>
          <div className="col-md-4 col-lg-12">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Developing</h3>
              </div>
            </div>
            {developing}
          </div>
      </th>
      <th>
          <div className="col-md-4 col-lg-12">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Testing</h3>
              </div>
            </div>
            {testing}
          </div>
</th>
<th>
          <div className="col-md-4 col-lg-12">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Deploying</h3>
              </div>
            </div>
            {deploying}
          </div>
          </th>
          </tr>
          </table>
        </div>
        </div>
      
    );
  }
}

export default Backlog;
