'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">TeamClassy2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-10da0b639efed14a73c7be35f6c97bc7"' : 'data-target="#xs-components-links-module-AppModule-10da0b639efed14a73c7be35f6c97bc7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-10da0b639efed14a73c7be35f6c97bc7"' :
                                            'id="xs-components-links-module-AppModule-10da0b639efed14a73c7be35f6c97bc7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link">ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' : 'data-target="#xs-components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' :
                                            'id="xs-components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link">Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' : 'data-target="#xs-components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' :
                                            'id="xs-components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link">Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' : 'data-target="#xs-components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' :
                                            'id="xs-components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link">Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' : 'data-target="#xs-components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' :
                                            'id="xs-components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link">FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TabDataService.html" data-type="entity-link">TabDataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});