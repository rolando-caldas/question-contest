import React from "react";
import {Step, Stepper, StepButton} from "@material-ui/core";


class New extends React.Component {

    render() {
        return (
            <Stepper nonLinear activeStep={this.activeStep}>
                <Step key={Contest}>
                    <StepButton>Content</StepButton>
                </Step>
                <md-step id="first" md-label="Contest">
                    <md-field>
                        <label>Título</label>
                        <md-input v-model="title" minlength="15" maxlength="30" required></md-input>
                    </md-field>

                    <md-field>
                        <label>Autor</label>
                        <md-input v-model="author" maxlength="30" required></md-input>
                    </md-field>

                    <md-field>
                        <label>Descripción</label>
                        <md-textarea v-model="description" md-autogrow md-counter="200"></md-textarea>
                    </md-field>
                </md-step>
            </Stepper>
        );
    }
}

export default New;