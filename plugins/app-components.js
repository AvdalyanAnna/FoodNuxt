import Vue from "vue";

import Header from "~/components/Header";

Vue.component("Header", Header);


// Global
import Logo from "~/components/global/Logo";
import svgIcon from "~/components/global/svgIcon";
import Btn from "~/components/global/Btn";
import Title from "~/components/global/Title";
import SubTitle from "~/components/global/SubTitle";
import Description from "~/components/global/Description";

Vue.component("Logo", Logo);
Vue.component("svgIcon", svgIcon);
Vue.component("Btn", Btn);
Vue.component("Title", Title);
Vue.component("SubTitle", SubTitle);
Vue.component("Description", Description);

//Blocks
import Home from "~/components/blocks/Home";
import Features from "~/components/blocks/Features";
import AboutUs from "~/components/blocks/AboutUs";

Vue.component("Home", Home);
Vue.component("Features", Features);
Vue.component("AboutUs", AboutUs);

// Items
import FeaturesList from "~/components/list/FeaturesList";

Vue.component("FeaturesList", FeaturesList);
