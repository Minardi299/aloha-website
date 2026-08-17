import { createContext, useContext, type ReactNode } from "react"

export type Lang = "en" | "vi"

export const STRINGS = {
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About us",
    },
    orderNow: "Order now",
    hero: {
      eyebrow: "Aloha Tea Coffee Pho",
      titleBefore: "A ",
      titleAccent: "tropical oasis",
      titleAfter: " in the Arizona desert",
      lead: "Bringing the refreshing, breezy spirit of Hawaii to the arid Arizona landscape. Where the warm “Aloha” spirit blends perfectly with handcrafted milk tea, rich coffee, and soul-warming Pho.",
      findLocation: "Find a location",
      photoAlt: "An iced rose tea in an Aloha Tea Coffee cup",
    },
    about: {
      kicker: "Our story",
      title: "The breath of Hawaii in the desert",
      p1: "Inspired and built by people who grew up in the sunny, breezy land of Hawaii, Aloha Tea Coffee Pho was born to bring the sincere and hospitable “Aloha” spirit to Arizona.",
      p2: "Amidst the scorching heat of the desert, we want to create a small “oasis” — a place where you can set aside your worries, find instant refreshment in every cool sip of tea, enjoy coffee that awakens your senses, and savor a bowl of Pho deeply rooted in tradition. Every corner of our shop carries the breath of the ocean, ready to welcome you back to relaxation and peace.",
      photoAlt: "A layered strawberry drink with matcha cream in an Aloha Tea Coffee cup",
    },
    gift: {
      kicker: "Give & get",
      title: "Gift cards & Aloha Rewards",
      lead: "A little aloha goes a long way. Treat someone to their next drink, or let your own orders add up to something free.",
      shareTitle: "Share a little aloha",
      shareBody:
        "An Aloha gift card is an easy way to say thanks, happy birthday, or just thinking of you. Pick one up at the counter and let them choose their own favorite.",
      rewardsTitle: "Aloha Rewards",
      steps: [
        {
          title: "Sip",
          text: "Order whatever you're craving: milk tea, fruit tea, or coffee.",
        },
        {
          title: "Earn",
          text: "Every visit counts toward your next reward.",
        },
        {
          title: "Enjoy a free drink",
          text: "Once you've earned it, your next cup is on us.",
        },
      ],
    },
    signature: {
      kicker: "Signature drink",
      title: "Traditional Aloha Milk Tea – essence of meticulous craft",
      p1: "If one flavor represents the soul of Aloha Tea Coffee Pho, it is our Traditional Aloha Milk Tea.",
      p2: "Instead of following industrial trends, we preserve the original values through a handcrafted cooking method combined with selected natural ingredients. Every drop of tea is brewed to the perfect standard, blended with a gentle creaminess and chewy, fragrant pearls, creating a drink that doesn’t just quench your thirst but touches your emotions. It is our passion, our memory, and the most respectful greeting we send to you.",
      photoAlt: "A cup of Traditional Aloha Milk Tea with pearls",
    },
    pho: {
      kicker: "The authentic Pho",
      title: "Aloha Pho – a unique flavor in the heart of the desert",
      p1: "“Pho” is a dish with a unique flavor profile that you won’t find anywhere else. At Aloha Tea Coffee Pho, every slice of fresh beef is carefully selected and combined with special spices using a family recipe to create a rich, naturally sweet broth.",
      p2: "Amidst the arid Arizona desert, a steaming, herb-scented bowl of Pho is the perfect catalyst to pair with our refreshing drinks. The interesting contrast between the warm, rich savory Pho broth and the cool, sweet notes of our handcrafted milk teas or tropical fruit teas will awaken all your senses.",
      p3: "Everything harmonizes to create the perfect combination for moments of relaxation, enjoying life to the fullest, and finding a little inner peace right here at Aloha Tea Coffee Pho.",
      photoAlt: "A steaming bowl of Aloha Pho with fresh beef and herbs",
    },
    locations: {
      kicker: "Come say hi",
      title: "Two homes, one aloha",
      orderOnline: "Order online",
      getDirections: "Get directions",
      openingSoon: "Opening soon",
      hoursComingSoon: "Hours coming soon",
      photoAlt: "Inside the {name} shop",
    },
    menu: {
      kicker: "Menu",
      title: "What are you craving?",
      lead: "Every drink is made to order. Find your favorite and order it for pickup.",
      drinksTitle: "Drinks",
      foodTitle: "Food",
      descriptions: {
        "Milk Tea":
          "Island signature: the handcrafted Traditional Aloha Milk Tea, alongside Brown Sugar, Blue Mint, Jasmine, Oolong, and Matcha.",
        "Fruit Tea":
          "Cool down in the desert: Exotic Tropical, Island Spring, Purple Sunset, Hawaiian Fever, O-Human, and Peachie Teasie.",
        "Cheese Foam Coffee & Tea":
          "Signature Vietnamese cheese foam coffee, in many flavors.",
        Smoothie: "Fresh smoothies: strawberry, honeydew, mango, avocado, and more.",
        "Aloha Food":
          "The authentic taste: special combination Pho and toppings.",
      } as Record<string, string>,
    },
    catering: {
      kicker: "Catering",
      title: "Aloha for your whole crowd",
      p1: "Planning an office party, a wedding, a school event, or anything in between? We’ll bring the tea bar to you — milk teas, fruit teas, and Vietnamese coffee, made fresh for your crowd.",
      p2: "Send us the details below and we’ll get back to you with options and pricing.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formDate: "Event date",
      formMessage: "Tell us about your event",
      formHint: "Guest count, location, and the drinks you have in mind.",
      submit: "Send inquiry",
    },
    footer: {
      blurb:
        "Boba tea and Vietnamese coffee, made with care and served with aloha in Glendale, Arizona.",
      explore: "Explore",
      home: "Home",
      about: "About us",
      giftCards: "Gift cards",
      catering: "Catering",
      followUs: "Follow us",
      rights: "All rights reserved.",
      terms: "Terms & Conditions",
    },
    notFound: {
      kicker: "Error 404",
      title: "This cup is empty",
      text: "The page you’re looking for isn’t on the menu. Head back home — or better yet, come see us for a real cup.",
      backHome: "Back to home",
      findLocation: "Find a location",
    },
    terms: {
      title: "Terms & Conditions",
      meta: "Last updated August 16, 2026",
      intro:
        "These terms cover your use of this website and the programs we describe on it: gift cards, Aloha Rewards, and online orders. Please read them before you use the site. If anything is unclear, contact us and we’ll be happy to help.",
      sections: [
        {
          title: "1. Acceptance of terms",
          paragraphs: [
            "By using this website, you accept these terms. If you do not agree with them, please do not use the site.",
            "These terms apply to the website only. Purchases in our shops and orders through third-party services have their own terms.",
          ],
        },
        {
          title: "2. Gift cards",
          paragraphs: [
            "Gift cards can be redeemed for drinks and other items at our shops. They cannot be exchanged for cash, except where the law requires it.",
            "Please treat a gift card like cash. We cannot replace a card that is lost or stolen.",
          ],
        },
        {
          title: "3. Aloha Rewards program",
          paragraphs: [
            "Aloha Rewards is our free loyalty program. Rewards have no cash value and cannot be transferred or sold.",
            "We may change how the program works from time to time. The details in effect at the time of your visit apply. Ask at the counter for the current program details.",
          ],
        },
        {
          title: "4. Online orders",
          paragraphs: [
            "Online orders are placed through third-party services such as DoorDash. Those services have their own terms, prices, and fees, which can differ from our in-store menu.",
            "For questions about an online order, contact the service you ordered through. For everything else, contact us directly.",
          ],
        },
        {
          title: "5. Intellectual property",
          paragraphs: [
            "The Aloha Tea Coffee name, our logo, and the content on this site belong to us. Please do not reuse them without our written permission.",
          ],
        },
        {
          title: "6. Limitation of liability",
          paragraphs: [
            "This website is provided as is. We work to keep the information on it accurate and current, but we make no guarantees.",
            "To the extent the law allows, we are not liable for losses that result from your use of this site.",
          ],
        },
        {
          title: "7. Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. When we do, we update the date at the top of this page.",
            "If you keep using the site after a change, you accept the updated terms.",
          ],
        },
        {
          title: "8. Contact us",
          paragraphs: [
            "Questions about these terms? Call our Glendale shop at {phone}, or stop by at {address}.",
          ],
        },
      ],
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      menu: "Thực đơn",
      about: "Về chúng tôi",
    },
    orderNow: "Đặt hàng",
    hero: {
      eyebrow: "Aloha Tea Coffee Pho",
      titleBefore: "Góc ",
      titleAccent: "biển nhiệt đới",
      titleAfter: " giữa lòng sa mạc Arizona",
      lead: "Mang làn gió tươi mát, sảng khoái từ những hòn đảo Hawaii đến với Arizona khô cằn. Nơi tinh thần “Aloha” ấm áp hòa quyện cùng hương vị trà sữa thủ công, cà phê đậm đà và tô phở trọn vị yêu thương.",
      findLocation: "Tìm cửa hàng",
      photoAlt: "Ly trà hoa hồng đá trong ly Aloha Tea Coffee",
    },
    about: {
      kicker: "Câu chuyện thương hiệu",
      title: "Hơi thở Hawaii giữa lòng sa mạc",
      p1: "Được truyền cảm hứng và xây dựng bởi những con người lớn lên tại miền đất Hawaii đầy nắng gió, Aloha Tea Coffee Pho ra đời với mong muốn mang tinh thần “Aloha” chân thành và hiếu khách đến với Arizona.",
      p2: "Giữa cái nắng oi bức của miền sa mạc khô cằn, chúng tôi muốn tạo ra một “ốc đảo” thu nhỏ – nơi bạn có thể gác lại muộn phiền, tìm thấy sự sảng khoái tức thì trong từng ngụm trà mát lạnh, thưởng thức hương vị cà phê thức tỉnh giác quan và tô phở ấm nồng đậm đà bản sắc. Mỗi góc nhỏ tại quán đều mang hơi thở của biển cả, sẵn sàng chào đón bạn trở về với sự thư thái và bình yên.",
      photoAlt: "Ly nước dâu nhiều tầng phủ kem matcha trong ly Aloha Tea Coffee",
    },
    gift: {
      kicker: "Trao & nhận",
      title: "Thẻ quà tặng & Aloha Rewards",
      lead: "Một chút aloha có thể đi rất xa. Mời người thương một ly, hoặc để những lần ghé quán của bạn cộng dồn thành một ly miễn phí.",
      shareTitle: "Chia sẻ một chút aloha",
      shareBody:
        "Thẻ quà tặng Aloha là cách dễ dàng để nói lời cảm ơn, chúc mừng sinh nhật, hay đơn giản là “đang nhớ đến bạn”. Ghé quầy mua thẻ và để người ấy tự chọn món yêu thích.",
      rewardsTitle: "Aloha Rewards",
      steps: [
        {
          title: "Thưởng thức",
          text: "Gọi bất cứ món nào bạn thèm: trà sữa, trà trái cây hay cà phê.",
        },
        {
          title: "Tích điểm",
          text: "Mỗi lần ghé quán đều được tính vào phần thưởng tiếp theo.",
        },
        {
          title: "Nhận ly miễn phí",
          text: "Khi tích đủ, ly tiếp theo là quán mời bạn.",
        },
      ],
    },
    signature: {
      kicker: "Món signature",
      title: "Trà sữa Aloha truyền thống – tinh hoa từ sự tỉ mỉ",
      p1: "Nếu phải chọn một hương vị đại diện cho linh hồn của Aloha Tea Coffee Pho, đó chính là Trà sữa Aloha truyền thống.",
      p2: "Không chạy theo sự hào nhoáng công nghiệp, chúng tôi gìn giữ giá trị nguyên bản bằng phương pháp nấu thủ công kết hợp với nguồn nguyên liệu tự nhiên, chất lượng tuyển chọn. Từng giọt trà được ủ chuẩn độ, quyện cùng vị béo ngậy thanh nhẹ và trân châu dẻo thơm, tạo nên một thức uống không chỉ giải khát mà còn chạm đến cảm xúc. Đó là tâm huyết, là ký ức và là lời chào trân trọng nhất chúng tôi gửi tặng bạn.",
      photoAlt: "Ly Trà sữa Aloha truyền thống với trân châu",
    },
    pho: {
      kicker: "Món phở",
      title: "Tô phở Aloha – hương vị độc bản giữa lòng sa mạc",
      p1: "“Pho” là món ăn mang hương vị độc bản mà bạn khó có thể tìm thấy ở bất kỳ nơi nào khác. Tại Aloha Tea Coffee Pho, từng lát thịt bò tươi ngon được tuyển chọn kỹ lưỡng, kết hợp cùng các loại gia vị đặc biệt theo công thức gia truyền để tạo nên phần nước súp đậm đà, thanh ngọt tự nhiên.",
      p2: "Giữa sự khô cằn của miền sa mạc Arizona, một tô phở đậm vị thơm lừng hương thảo mộc chính là chất xúc tác hoàn hảo để kết hợp với các món thức uống thanh mát, sảng khoái tại quán. Sự đối lập thú vị giữa cái ấm nồng, đậm đà của nước súp phở gia truyền và vị tươi mát, ngọt lành từ những ly trà sữa thủ công hay trà trái cây nhiệt đới sẽ đánh thức mọi giác quan của bạn.",
      p3: "Tất cả hòa quyện lại, tạo nên một sự kết hợp hoàn hảo cho những phút giây thư giãn, tận hưởng trọn vẹn cuộc sống và tìm thấy chút bình yên ngay tại Aloha Tea Coffee Pho.",
      photoAlt: "Tô phở Aloha nóng hổi với thịt bò tươi và rau thơm",
    },
    locations: {
      kicker: "Ghé chơi nhé",
      title: "Hai mái nhà, một tinh thần aloha",
      orderOnline: "Đặt hàng online",
      getDirections: "Chỉ đường",
      openingSoon: "Sắp khai trương",
      hoursComingSoon: "Giờ mở cửa sẽ cập nhật sớm",
      photoAlt: "Bên trong cửa hàng {name}",
    },
    menu: {
      kicker: "Thực đơn",
      title: "Hôm nay bạn thèm gì?",
      lead: "Mỗi món đều được pha khi bạn gọi. Tìm món yêu thích của bạn và đặt mang đi.",
      drinksTitle: "Thức uống",
      foodTitle: "Món ăn",
      descriptions: {
        "Milk Tea":
          "Signature của đảo: Trà sữa Aloha truyền thống nấu thủ công, cùng Brown Sugar, Blue Mint, Jasmine, Oolong và Matcha.",
        "Fruit Tea":
          "Giải nhiệt giữa sa mạc: Exotic Tropical, Island Spring, Purple Sunset, Hawaiian Fever, O-Human và Peachie Teasie.",
        "Cheese Foam Coffee & Tea":
          "Cà phê kem cheese kiểu Việt đặc trưng, với nhiều hương vị.",
        Smoothie: "Sinh tố tươi: dâu, dưa lưới, xoài, bơ và nhiều vị khác.",
        "Aloha Food":
          "Hương vị nguyên bản: phở đặc biệt thập cẩm cùng nhiều topping.",
      } as Record<string, string>,
    },
    catering: {
      kicker: "Đặt tiệc",
      title: "Aloha cho cả buổi tiệc của bạn",
      p1: "Bạn đang chuẩn bị tiệc công ty, đám cưới, sự kiện trường học hay bất cứ dịp nào? Chúng tôi sẽ mang quầy trà đến tận nơi — trà sữa, trà trái cây và cà phê Việt, pha mới cho cả buổi tiệc.",
      p2: "Gửi thông tin bên dưới, chúng tôi sẽ liên hệ lại với các lựa chọn và báo giá.",
      formName: "Họ tên",
      formEmail: "Email",
      formPhone: "Số điện thoại",
      formDate: "Ngày tổ chức",
      formMessage: "Kể cho chúng tôi về sự kiện của bạn",
      formHint: "Số khách, địa điểm và những món bạn đang nghĩ đến.",
      submit: "Gửi yêu cầu",
    },
    footer: {
      blurb:
        "Trà sữa và cà phê Việt, pha chế tận tâm và phục vụ với tinh thần aloha tại Glendale, Arizona.",
      explore: "Khám phá",
      home: "Trang chủ",
      about: "Về chúng tôi",
      giftCards: "Thẻ quà tặng",
      catering: "Đặt tiệc",
      followUs: "Kết nối",
      rights: "Bảo lưu mọi quyền.",
      terms: "Điều khoản & Điều kiện",
    },
    notFound: {
      kicker: "Lỗi 404",
      title: "Ly này đang trống",
      text: "Trang bạn tìm không có trong thực đơn. Hãy quay về trang chủ — hoặc hay hơn, ghé quán làm một ly thật.",
      backHome: "Về trang chủ",
      findLocation: "Tìm cửa hàng",
    },
    terms: {
      title: "Điều khoản & Điều kiện",
      meta: "Cập nhật lần cuối: 16/08/2026",
      intro:
        "Các điều khoản này áp dụng cho việc bạn sử dụng website và các chương trình được giới thiệu trên đó: thẻ quà tặng, Aloha Rewards và đặt hàng online. Vui lòng đọc trước khi sử dụng website. Nếu có điều gì chưa rõ, hãy liên hệ với chúng tôi, chúng tôi luôn sẵn lòng hỗ trợ.",
      sections: [
        {
          title: "1. Chấp nhận điều khoản",
          paragraphs: [
            "Khi sử dụng website này, bạn đồng ý với các điều khoản bên dưới. Nếu bạn không đồng ý, vui lòng ngừng sử dụng website.",
            "Các điều khoản này chỉ áp dụng cho website. Việc mua hàng tại quán và đặt hàng qua dịch vụ bên thứ ba có điều khoản riêng.",
          ],
        },
        {
          title: "2. Thẻ quà tặng",
          paragraphs: [
            "Thẻ quà tặng dùng để đổi đồ uống và các sản phẩm khác tại quán. Thẻ không thể quy đổi thành tiền mặt, trừ khi pháp luật yêu cầu.",
            "Vui lòng giữ thẻ quà tặng như tiền mặt. Chúng tôi không thể cấp lại thẻ bị mất hoặc bị đánh cắp.",
          ],
        },
        {
          title: "3. Chương trình Aloha Rewards",
          paragraphs: [
            "Aloha Rewards là chương trình khách hàng thân thiết miễn phí của quán. Phần thưởng không có giá trị quy đổi tiền mặt và không thể chuyển nhượng hay mua bán.",
            "Chúng tôi có thể điều chỉnh cách chương trình hoạt động theo thời gian. Chi tiết áp dụng là chi tiết có hiệu lực tại thời điểm bạn ghé quán. Vui lòng hỏi tại quầy để biết thông tin mới nhất.",
          ],
        },
        {
          title: "4. Đặt hàng online",
          paragraphs: [
            "Đơn hàng online được đặt qua dịch vụ bên thứ ba như DoorDash. Các dịch vụ này có điều khoản, giá và phí riêng, có thể khác với thực đơn tại quán.",
            "Nếu có thắc mắc về đơn hàng online, vui lòng liên hệ dịch vụ bạn đã đặt hàng. Mọi vấn đề khác, hãy liên hệ trực tiếp với chúng tôi.",
          ],
        },
        {
          title: "5. Sở hữu trí tuệ",
          paragraphs: [
            "Tên Aloha Tea Coffee, logo và nội dung trên website này thuộc về chúng tôi. Vui lòng không sử dụng lại khi chưa có sự đồng ý bằng văn bản.",
          ],
        },
        {
          title: "6. Giới hạn trách nhiệm",
          paragraphs: [
            "Website này được cung cấp theo hiện trạng. Chúng tôi cố gắng giữ thông tin chính xác và cập nhật, nhưng không đưa ra bất kỳ bảo đảm nào.",
            "Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho các thiệt hại phát sinh từ việc bạn sử dụng website.",
          ],
        },
        {
          title: "7. Thay đổi điều khoản",
          paragraphs: [
            "Chúng tôi có thể cập nhật các điều khoản này theo thời gian. Khi đó, ngày cập nhật ở đầu trang sẽ được thay đổi.",
            "Nếu bạn tiếp tục sử dụng website sau khi điều khoản thay đổi, nghĩa là bạn chấp nhận điều khoản mới.",
          ],
        },
        {
          title: "8. Liên hệ",
          paragraphs: [
            "Có thắc mắc về các điều khoản này? Gọi cho cửa hàng Glendale qua số {phone}, hoặc ghé trực tiếp tại {address}.",
          ],
        },
      ],
    },
  },
}

export type Strings = (typeof STRINGS)["en"]

const LangContext = createContext<Lang>("en")

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang
  children: ReactNode
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useI18n() {
  const lang = useContext(LangContext)
  const t: Strings = STRINGS[lang]
  function path(p: string) {
    if (lang === "en") return p
    if (p === "/") return "/vi"
    if (p.startsWith("/#")) return "/vi" + p.slice(1)
    return "/vi" + p
  }
  return { lang, t, path }
}
