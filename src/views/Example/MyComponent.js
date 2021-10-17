import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    /* JSX : viết html bên trong một file javascript
    return 1 block-khoi */
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Program managers', salary: '1000' }

        ]

    }
    /* Ban chat cua state la giup cho trang thai du lieu duoc cap nhat
    lien tuc ma khong can load lai trang */

    addNewJob = (job) => {
        console.log('check job from parent : ',job)
        let currenJobs = this.state.arrJobs
        currenJobs.push(job)
        this.setState({
            arrJobs : currenJobs
            // arrJobs: [...this.state.arrJobs,job]
        })
    }

    deleteAJob = (job) =>{
        let currenJobs = this.state.arrJobs
        currenJobs = currenJobs.filter(item => item.id != job.id)
        this.setState({
            arrJobs : currenJobs
        })
    }
    render() {
        console.log('>>> call render : ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />

            </>

        )
    }
}

export default MyComponent;