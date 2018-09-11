import React, { Component } from "react";
import "./scss/App.scss";

import Modal from "./components/Modal/Modal";
import Radio from "./components/Radio/Radio";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";

import imgUrl from "./img/back-img_bridge2.jpg";

import imgPosition from "./img/icons/position.png";
import imgUpload from "./img/icons/upload.png";
import imgGallery from "./img/icons/gallery.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isOpenBlock: true,
      checkboxActiveScroll: true,
      checkboxActiveOverlay: true,
      checkboxActiveColorBehind: true,
      radioActive: "active-fixed",
      tabs: "tab-image",
      tabsList: "tabsList-background"
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.clickRadioFixed = this.clickRadioFixed.bind(this);
    this.clickRadioParallax = this.clickRadioParallax.bind(this);

    this.clickCheckboxScroll = this.clickCheckboxScroll.bind(this);
    this.clickCheckboxOverlay = this.clickCheckboxOverlay.bind(this);
    this.clickCheckboxColorBehind = this.clickCheckboxColorBehind.bind(this);

    this.tabColor = this.tabColor.bind(this);
    this.tabImage = this.tabImage.bind(this);
    this.tabVideo = this.tabVideo.bind(this);

    this.tabsBackground = this.tabsBackground.bind(this);
    this.tabsLayout = this.tabsLayout.bind(this);
  }

  /*Modal Scripts Start*/
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  clickRadioFixed() {
    this.setState({
      radioActive: "active-fixed"
    });
  }
  clickRadioParallax() {
    this.setState({
      radioActive: "active-parallax"
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  /*Modal Scripts END*/

  /*Show-Hide Sections START*/
  clickCheckboxScroll() {
    this.setState({
      checkboxActiveScroll: !this.state.checkboxActiveScroll
    });
  }

  clickCheckboxOverlay() {
    this.setState({
      checkboxActiveOverlay: !this.state.checkboxActiveOverlay
    });
  }
  clickCheckboxColorBehind() {
    this.setState({
      checkboxActiveColorBehind: !this.state.checkboxActiveColorBehind
    });
  }
  /*Show-Hide Sections Finish*/

  /*Tabs Scripts Start */
  tabColor() {
    this.setState({
      tabs: "tab-color"
    });
  }
  tabImage() {
    this.setState({
      tabs: "tab-image"
    });
  }
  tabVideo() {
    this.setState({
      tabs: "tab-video"
    });
  }

  tabsLayout() {
    this.setState({
      tabsList: "tabsList-layout"
    });
  }

  tabsBackground() {
    this.setState({
      tabsList: "tabsList-background"
    });
  }

  /*Tabs Scripts Finish*/

  render() {
    const isModalOpen = this.state.isModalOpen;
    const radioActive = this.state.radioActive;

    const checkboxActiveScroll = this.state.checkboxActiveScroll;
    const checkboxActiveOverlay = this.state.checkboxActiveOverlay;
    const checkboxActiveColorBehind = this.state.checkboxActiveColorBehind;

    const tabs = this.state.tabs;
    const tabsList = this.state.tabsList;
    const chooseImageStyle = {
      backgroundImage: "url(" + imgUrl + ")"
    };
    return (
      <div className={"main-page"}>
        <Button onClick={this.openModal} className={"btn btn_main-page"}>
          Open Modal
        </Button>
        <Modal isModalOpen={isModalOpen} closeModal={this.closeModal}>
          <div className={"modal-head"}>
            {/*Modal TOP BLOCK Start*/}
            <div className={"modal-head__top"}>
              <div className={"modal-head__title"}>Block settings</div>
              <Button
                className={"modal-head__close-button"}
                onClick={this.closeModal}
              >
                <div className={"modal-head__close-icon close"} />
              </Button>
            </div>
            <ul className={"modal-head__tabs tabs-list"}>
              {/*List in Modal Top START*/}
              <li className={"tabs-list__item"}>
                <Button
                  onClick={this.tabsLayout}
                  className={
                    tabsList === "tabsList-layout"
                      ? "tabs-list__link tabs-list__link_active"
                      : "tabs-list__link"
                  }
                >
                  Layout
                </Button>
              </li>
              <li className={"tabs-list__item"}>
                <Button
                  onClick={this.tabsBackground}
                  className={
                    tabsList === "tabsList-background"
                      ? "tabs-list__link tabs-list__link_active"
                      : "tabs-list__link"
                  }
                >
                  Background
                </Button>
              </li>
            </ul>
            {/*List in Modal Top END*/}
            {/*Modal TOP BLOCK Finish*/}
          </div>
          <div className={"modal-main"}>
            <div
              className={
                tabsList === "tabsList-layout"
                  ? "modal-main__item modal-main__item_active"
                  : "modal-main__item"
              }
            >
              <div className="section">Some Options for Layout</div>
            </div>
            <div
              className={
                tabsList === "tabsList-background"
                  ? "modal-main__item modal-main__item_active"
                  : "modal-main__item"
              }
            >
              <ul className={"modal-main__tabs tabs"}>
                <li className={"tabs__item"}>
                  <Button
                    className={
                      tabs === "tab-color"
                        ? "tabs__link tabs__link_active"
                        : "tabs__link"
                    }
                    onClick={this.tabColor}
                  >
                    Color
                  </Button>
                </li>
                <li className={"tabs__item "}>
                  <Button
                    className={
                      tabs === "tab-image"
                        ? "tabs__link tabs__link_active"
                        : "tabs__link"
                    }
                    onClick={this.tabImage}
                  >
                    Image
                  </Button>
                </li>
                <li className={"tabs__item"}>
                  <Button
                    className={
                      tabs === "tab-video"
                        ? "tabs__link tabs__link_active"
                        : "tabs__link"
                    }
                    onClick={this.tabVideo}
                  >
                    Video
                  </Button>
                </li>
              </ul>
              <div className={"modal-main__content"}>
                <div className={"tabs-content"}>
                  <div
                    className={
                      tabs === "tab-color"
                        ? "tabs-content__item tabs-content__item_active"
                        : "tabs-content__item"
                    }
                  >
                    <div className="section">Some Options for Color</div>
                  </div>

                  <div
                    className={
                      tabs === "tab-image"
                        ? "tabs-content__item tabs-content__item_active"
                        : "tabs-content__item"
                    }
                  >
                    <div className={"choose-image"} style={chooseImageStyle}>
                      <Button className={"choose-image__button"}>
                        <img
                          src={imgUpload}
                          alt="iconUpload"
                          className={"choose-image__button-icon"}
                        />{" "}
                        Upload
                      </Button>
                      <Button className={"choose-image__button"}>
                        <img
                          src={imgGallery}
                          alt="iconGallery"
                          className={"choose-image__button-icon"}
                        />
                        Gallery
                      </Button>
                    </div>
                    <div className={"section"}>
                      <Checkbox
                        clickCheckbox={this.clickCheckboxScroll}
                        className="section__checkbox"
                        checkboxActive={checkboxActiveScroll}
                      >
                        scroll effects
                      </Checkbox>
                      <div
                        className={
                          checkboxActiveScroll
                            ? "section__content"
                            : "section__content section__content_hide"
                        }
                      >
                        <Radio
                          radioActive={
                            radioActive === "active-fixed" ? true : false
                          }
                          clickRadio={this.clickRadioFixed}
                        >
                          Fixed
                        </Radio>
                        <Radio
                          radioActive={
                            radioActive === "active-parallax" ? true : false
                          }
                          clickRadio={this.clickRadioParallax}
                        >
                          Parallax
                        </Radio>
                      </div>
                    </div>
                    <div className={"section"}>
                      <Checkbox
                        clickCheckbox={this.clickCheckboxOverlay}
                        className="section__checkbox"
                        checkboxActive={checkboxActiveOverlay}
                      >
                        Color Overlay
                      </Checkbox>
                      <div
                        className={
                          checkboxActiveOverlay
                            ? "section__content"
                            : "section__content section__content_hide"
                        }
                      >
                        <div className={"color-section"}>
                          <div className={"color-section__title"}>Solid</div>
                          <div className={"color-section__inputs color-input"}>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_white"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_dark-orange"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_blue"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_purple"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_black"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_custom"
                                }
                              />
                            </Button>
                          </div>
                        </div>
                        <div className={"color-section color-section_last"}>
                          <div className={"color-section__title"}>Gradient</div>
                          <div className={"color-section__inputs color-input"}>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-grey"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button "}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-dark-orange"
                                }
                              />
                            </Button>
                            <Button
                              className={
                                "color-input__button color-input__button_active"
                              }
                            >
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-blue "
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-purple"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-black"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_custom"
                                }
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"section section_noborder"}>
                      <Checkbox
                        clickCheckbox={this.clickCheckboxColorBehind}
                        className="section__checkbox"
                        checkboxActive={checkboxActiveColorBehind}
                      >
                        Color behind image
                      </Checkbox>
                      <div
                        className={
                          checkboxActiveColorBehind
                            ? "section__content"
                            : "section__content section__content_hide"
                        }
                      >
                        <div className={"color-section"}>
                          <div className={"color-section__title"}>Solid</div>
                          <div className={"color-section__inputs color-input"}>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_white"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_dark-orange"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_blue"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_purple"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_black"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_custom"
                                }
                              />
                            </Button>
                          </div>
                        </div>
                        <div className={"color-section color-section_last"}>
                          <div className={"color-section__title"}>Gradient</div>
                          <div className={"color-section__inputs color-input"}>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-grey"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-dark-orange"
                                }
                              />
                            </Button>
                            <Button
                              className={
                                "color-input__button color-input__button_active"
                              }
                            >
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-blue "
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-purple"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_grad-black"
                                }
                              />
                            </Button>
                            <Button className={"color-input__button"}>
                              <div
                                className={
                                  "color-input__marker color-input__marker_custom"
                                }
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      tabs === "tab-video"
                        ? "tabs-content__item tabs-content__item_active"
                        : "tabs-content__item"
                    }
                  >
                    <div className="section">Some Options for Video</div>
                  </div>
                </div>
              </div>
              <Button className={"modal-main__button"}>
                <img
                  src={imgPosition}
                  alt="icon-position"
                  className={"modal-main__button-icon"}
                />
                Positioning Settings
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
