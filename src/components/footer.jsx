import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

//core
import { Hidden, makeStyles } from "@material-ui/core"
import { Divider } from "@material-ui/core";

import styles from "../assets/components/footerStyle";

import Facebook from "../assets/logos/Facebook.svg"
import Instagram from "../assets/logos/Instagram.svg"
import LinkedIn from "../assets/logos/LinkedIn.svg"
import logo from "../assets/logos/LogoDesignITUS.svg"

//icon
import { LocationOn, MailOutline, Phone } from "@material-ui/icons";
import { navItems } from "./routeData";

const useStyles = makeStyles(styles);

function Socials() {
    const classes = useStyles();

    const socials = [
        {
            link: "https://www.facebook.com/design.itus",
            src: Facebook,
            text: "facebook"
        },
        {
            link: "https://www.instagram.com/designitusclub/",
            src: Instagram,
            text: "instagram"
        },
        {
            link: "https://www.linkedin.com/company/designstudios/",
            src: LinkedIn,
            text: "linkedin"
        },
    ]

    return (
        <div>
            {socials.map((social) => (
                <a href={social.link} className={classes.socials}>
                    <img src={social.src} alt={social.text} />
                </a>
            ))}
        </div>
    )
}

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.rowCenter}>
                    <div className={classes.container}>
                        <Link to="/">
                            <img src={logo} alt="logo" id="logoImg" className={classes.logo} />
                        </Link>
                        <Hidden only={['md', 'lg', 'xl']}>
                            <Socials />
                        </Hidden>
                    </div>
                    <div className={classes.columnGap18}>
                        <div className={classes.title}>Design ITUS - CLB học thuật thiết kế</div>
                        <div className={classes.columnGap12}>
                            <div className={classes.rowGap8}>
                                <LocationOn />
                                <div className={classes.columnGap4}>
                                    <div>227 Nguyễn Văn Cừ, phường 10, quận 5, TP.HCM</div>
                                    <div>Linh Xuân, Linh Trung, Thủ Đức</div>
                                </div>
                            </div>
                            <div className={classes.rowGap8}>
                                <Phone />
                                <div className={classes.rowGap12}>
                                    <div>0939 074 483</div>
                                    <div>-</div>
                                    <div>0939 074 483</div>
                                </div>
                            </div>
                            <div className={classes.rowGap8}>
                                <MailOutline />
                                <div>designclub@fit.hcmus.edu.vn</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Hidden only={['xs', 'sm']}>
                    <div className={classes.rowGap40}>
                        {navItems.map((item) => (
                            <div className={classes.columnGap8}>
                                <Link to={item.link} className={classes.title}>{item.text}</Link>
                                {item.sections ?
                                    <>
                                        {item.sections.map((section) => (
                                            <HashLink to={`${item.link}${section.link}`} className={classes.link} smooth>
                                                {section.text}
                                            </HashLink>
                                        ))}
                                    </>
                                    :
                                    (item.child ?
                                        <>
                                            {item.child.map((child) => (
                                                <Link to={`${item.link}${child.link}`} className={classes.link}>
                                                    {child.text}
                                                </Link>
                                            ))}
                                        </>
                                        :
                                        null
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </Hidden>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.container}>
                <div>© 2022 Design ITUS. All right reserved.</div>
                <Hidden only={['xs', 'sm']}>
                    <Socials />
                </Hidden>
            </div>
        </div>
    )
}