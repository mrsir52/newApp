import React, { Component } from 'react';
import './App.css'
import { Button, Card, CardBody, CardTitle, CardText, Input } from 'mdbreact';


class App extends Component {
    render() {
        return (
            <div className="intro">
                <section className="container row">
                    {/*Background Image */}

                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6">
                      <CardBody>
                          <Card>
                              <CardBody>
                                  <div className="md-form">
                                      <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                      <Input label="Password" icon="lock" group type="password" validate/>
                                      <div className="text-center">
                                          <Button>Login</Button>
                                      </div>
                                    </div>
                              </CardBody>
                          </Card>
                      </CardBody>
                    </div>
                    <div className="col-lg-3">

                    </div>
                </section>
            </div>
        );
    }
}

export default App;
