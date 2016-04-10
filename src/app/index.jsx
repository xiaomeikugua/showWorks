import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import '../../node_modules/bootstrap/less/bootstrap.less';
import '../css/style.scss';

class TopBar extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">sssssss</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>

        </div>

      </div>

    )
  }
}



class ContentImgItem extends React.Component {
  render() {
    let _pWorksItem = this.props.projectWorksItem;
    let imgStyle = classNames('works-img', {
      [`${_pWorksItem.alias}-img-background`]: _pWorksItem.alias == 'health' || _pWorksItem.alias == 'database'
    });
    return (
      <div className="col-md-4 col-sm-6 col">
        <div className="a-web">
          <div className="works-box">
            <img className={imgStyle} src={_pWorksItem.imgUrl} alt={_pWorksItem.projectName}/>
            <div className="works-body">
              <a href={_pWorksItem.url}>{_pWorksItem.projectName}</a>

              <p>{_pWorksItem.detail}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let _pWorks = this.props.projectWorks;
    return (
      <div>
        <div className="init-show">
          <div className="big-title">
            <h1>Hello World</h1>
          </div>
        </div>
        <div className="content-info">
          <div className="container">
            <div className="row">
              {
                _pWorks.map((p) => {
                  return <ContentImgItem projectWorksItem={p}/>
                })
              }

            </div>
          </div>

        </div>
        <div className="technology-title">
          <h3>用到的技术</h3>
        </div>

      </div>
    )
  }
}




class ContactItem extends React.Component {
  render() {
    let _contactItem = this.props.contactItem;
        // <p className="contact-detail">{_contactItem.detail}</p>
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img src={_contactItem.imgUrl} alt="" className="img-circle contact-img"/>
        <span className="contact-title">{_contactItem.contactTitle}</span>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    let contactInfo = this.props.contact;
    return (
      <div className="footer-top">
        <div className="contact">
          <div className="container">
            <div className="title_contact">
              <p>about us</p>
            </div>
            <div className="row">
              {
                contactInfo.map((info) => {
                  return <ContactItem contactItem={info}/>
                })
              }
            </div>
          </div>
        </div>
        <footer className="page-footer">
          <div className="container">
            <div>
              <p>© xiejiadong 2016</p>
            </div>
          </div>
        </footer>

      </div>

    )
  }
}


let works = [
  {
    projectName: "体制测试",
    alias: 'health',
    imgUrl: "./images/health.png",
    detail: "旨在为体质辨识及与中医体质相关疾病的防治、养生保健、健康管理提供依据，使体质分类科学化、规范化",
    url: "http://115.29.48.21/"
  },
  {
    projectName: "中医证候临床辨证数据库",
    alias: 'database',
    imgUrl: "./images/database.png",
    detail: "中医证候临床辨证数据库，旨在收集数据",
    url: "http://115.29.48.21:4561"
  },
  {
    projectName: "通讯录",
    imgUrl: "./images/contacts.jpg",
    detail: "正在开发中",
    url: ""
  },
  {
    projectName: "问卷",
    imgUrl: "./images/question.png",
    detail: "自动生成问卷",
    url: "http://115.29.48.21:4561"
  }

];


let contactInfo = [
  { imgUrl: "./images/github-icon.png", contactTitle: "github", detail: "个人 github 内容", url: "" },
  { imgUrl: "./images/weibo.png", contactTitle: "微博", detail: "", url: "" },
  { imgUrl: "./images/email.png", contactTitle: "邮箱", detail: "", url: "" },
  { imgUrl: "./images/cnblog.png", contactTitle: "博客园", detail: "", url: "" }
];


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Content projectWorks={works}/>
        <Footer contact={contactInfo}/>
      </div>
    )
  }
}

ReactDOM.render(<HomePage />, document.getElementById('main'));
