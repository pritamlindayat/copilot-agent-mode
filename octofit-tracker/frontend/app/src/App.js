

import OctofitLogoSmall from './OctofitLogoSmall';


function App() {
  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient bg-primary mb-4 shadow">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="me-2"><OctofitLogoSmall /></span>
            <span className="fw-bold fs-4">Octofit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <h1 className="card-title display-4 mb-3">Welcome to <span className="text-primary">Octofit Tracker</span></h1>
                <p className="card-text lead mb-4">
                  Track your fitness, join teams, and compete on the leaderboard!
                </p>
                <a href="#" className="btn btn-primary btn-lg me-2">Get Started</a>
                <a href="#" className="btn btn-outline-secondary btn-lg">Learn More</a>
              </div>
            </div>
            {/* Example Bootstrap Table */}
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Sample Leaderboard</h2>
              </div>
              <div className="card-body p-0">
                <table className="table table-striped mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User</th>
                      <th scope="col">Points</th>
                      <th scope="col">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Alice</td>
                      <td>1200</td>
                      <td>Team Rocket</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Bob</td>
                      <td>1100</td>
                      <td>Team Alpha</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Charlie</td>
                      <td>950</td>
                      <td>Team Rocket</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
