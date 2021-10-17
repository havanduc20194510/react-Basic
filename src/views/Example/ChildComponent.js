import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {

    /* JSX : viết html bên trong một file javascript
    return 1 block-khoi */

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete : ', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('>>> check conditional : ', check)

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button
                            style = {{color : 'red'}}
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></>
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>

        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> check props fuction : ', props)
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }


//             </div>
//         </>
//     )

// }
export default ChildComponent;