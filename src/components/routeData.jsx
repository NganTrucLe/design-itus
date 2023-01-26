const navItems = [
    {
        text: "Trang chủ",
        link: "/",
        sections: [
            {
                text: "Outr Space",
                link: "#outr-space"
            },
            {
                text: "Chúng tôi là ai",
                link: "#who-are-we"
            },
            {
                text: "Hoạt dộng",
                link: "#our-works"
            },
            {
                text: "Đối tác",
                link: "#partners"
            }
        ]
    },
    {
        text: "Giới thiệu",
        link: "/about-us",
        sections: [
            {
                text: "Lịch sử",
                link: "#history"
            },
            {
                text: "Nhiệm vụ",
                link: "#our-missions"
            },
            {
                text: "Ban chủ nhiệm",
                link: "#leaders"
            },
        ]
    },
    {
        text: "Sự kiện",
        link: "/events",
        child: [
            {
                text: "Outr Space 7",
                link: "/outr-space-7"
            }
        ]
    }
]

export { navItems } 