import "./rightBar.scss";

const RightBar = () => {
    return (
      <div className="rightBar">
        <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/woman_1.jpg"
                  alt=""
                />
                <span>Anca Ioana</span>
              </div>

              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_1.jpg"
                  alt=""
                />
                <span>Bogdan Diaconu</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>


          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_2.jpg"
                  alt=""
                />
                <p>
                  <span>Dinu Mihai</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_3.jpg"
                  alt=""
                />
                <p>
                  <span>Mircea Ion</span> changed their profile picture
                </p>
              </div>
              <span>5 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_2.jpg"
                  alt=""
                />
                <p>
                  <span>Dinu Mihai</span> liked a photo
                </p>
              </div>
              <span>13 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/woman_2.jpg"
                  alt=""
                />
                <p>
                  <span>Erika Pop</span> changed their cover picture
                </p>
              </div>
              <span>21 min ago</span>
            </div>
          </div>

          
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/woman_2.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Erika Pop</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_1.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Bogdan Diaconu</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/woman_1.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Anca Ioana</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_2.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Dinu Mihai</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="/images/man_3.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Mircea Ion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default RightBar;