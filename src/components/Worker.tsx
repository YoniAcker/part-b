interface WorkerProps {workerInfo: {id: number, firstName: string, lastName:string,
     title:string, country: string, city:string, birthDate:Date, imageUrl:string, time: string}}

const Worker = ({workerInfo}: WorkerProps) => {
    const age: number = new Date().getFullYear() - workerInfo.birthDate.getFullYear();
    console.log(workerInfo.birthDate);
    return (
        <>
            <div className="col-md-4">
                <div className="team text-center">
                    <img src={workerInfo.imageUrl} alt="Worker Image" className="avatar" />
                    <div className="title">
                        <h4>{workerInfo.firstName + " " + workerInfo.lastName}</h4>
                        <h5 className="muted regular">{workerInfo.title}</h5>
                        <h5 className="muted regular">{workerInfo.city + ", " + workerInfo.country}</h5>
                    </div>
                    <button
                        data-toggle="modal"
                        data-target="#modal1"
                        className="btn btn-blue-fill"
                    >
                        About Me
                    </button>
                </div>
            </div>
            <div id="modals">
                <div
                className="modal fade"
                    id="modal1"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content modal-popup">
                            <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
                            <img src={workerInfo.imageUrl} alt="Team Image" className="shit" />
                            <b>
                                <h3>
                                    <center>{workerInfo.firstName + " " + workerInfo.lastName}</center>
                                </h3>
                            </b>
                            <b>
                                <p><center>{workerInfo.title}</center></p>
                            </b>
                            <b>
                                <p><center>{age} years old</center></p>
                            </b>
                            <b>
                                <p><center>{workerInfo.time}</center></p>
                            </b>
                            <b>
                                <p><center>Timezone: {workerInfo.city}</center></p>
                            </b>
                            <hr />
                            <div className="bio">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                vel vehicula nisl. Ut mauris metus, fermentum nec orci nec,
                                sagittis laoreet eros. Nam porta luctus mi, sodales aliquam nibh
                                convallis ac. Nunc tempor malesuada lobortis. Pellentesque
                                habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Phasellus eu tristique enim. Sed id malesuada
                                velit. Suspendisse ut nisi quis neque venenatis vestibulum id non
                                ipsum. Aliquam aliquet dapibus nisi, ut tempor massa hendrerit ut.
                                Sed efficitur ex posuere, interdum turpis a, maximus urna. Aenean
                                sed sapien nec erat viverra lobortis cursus sit amet ex. Maecenas
                                vel tempus mi, volutpat maximus tortor. Suspendisse tempus eget
                                ligula id mattis. Nam porttitor mauris a accumsan convallis.
                            </div>
                            <br />
                            <ul className="list-inline social-buttons">
                                <li>
                                    <a href="https://facebook.com" target="_blank">
                                        <img
                                            src="../../img/img/facebook.png"
                                            className="icon"
                                            height="40px"
                                            width="40px"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ca.linkedin.com" target="_blank">
                                        <img 
                                            src="../../img/img/linkedin.png" 
                                            height="40px"
                                            width="40px"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank">
                                        <img
                                            src="../../img/img/twitter-x-logo.png"
                                            className="icon"
                                            height="40px"
                                            width="40px"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Worker;