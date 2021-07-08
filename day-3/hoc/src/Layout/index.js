import React from 'react';

export default function Layout(Component) {
  return class extends React.Component {
    render() {
      return (
        <div className="container">
          <Component />
          <div className="row justify-content-md-center">
            <div className="col-6 text-right">
              <div className="row justify-content-md-end">
                <div className="col-auto">
                  <button type="button" className="btn btn-default">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
}
