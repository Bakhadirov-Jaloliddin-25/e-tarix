import madinah from "../../assets/images/madinah909x557.png";
import search from "../../assets/images/second_search.svg";
import arrow from "../../assets/images/right_arrow.svg";
import comment from "../../assets/images/comment.svg";
import share from "../../assets/images/share.svg";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";

const Tarix = () => {
  return (
    <div>
      <Hero />
      <div className="container flex gap-6 justify-center">
        <div className="flex flex-col gap-8">
          <div className="w-full h-[2050px] bg-white px-7 rounded-lg">
            <div className="flex py-8 font-bold">
              <p className="text-[#979797]">Bosh Sahifa</p>
              <img src={arrow} alt="arrow.svg" />
              <p className="text-[#272727]">Tarix</p>
            </div>
            <img src={madinah} alt="madinah.png" />
            <div className="flex flex-col gap-7 mt-11">
              <h2 className="font-bold text-3xl">
                Жонли нарсани нишон қилманглар
              </h2>
              <p className="w-[880px] leading-7 text-xl pb-10">
                Bolaligimdan tarix bilan qiziqaman. Ammo O‘zbekistonning 19- va
                20-asr boshlaridagi tarixini yaxshi bilmayman. Nega desangiz u
                vaqtlar tarixini o‘qisam yuragim qon bo‘lib ketadi, qiynalib
                ketaman… Shuning uchun o‘sha vaqt voqealari ustida izlanishlar
                olib borayotgan mutaxasislarga qoyil qolaman, baraka topishisin!
                Ulardan minnatdor bo‘laylik, mehnatlari qadrini bilaylik! <br />
                <br /> 1938 yilning oktyabr oyida ro‘y bergan dahshatli
                voqelaridan olinadigan asosiy ibratlanish savollari: <br />
                <br />
                «Nima uchun xalqimiz ustidan boshqalar shunday ish qilishdi?»
                emas balki «Nima uchun xalqimiz bunga yo‘l qo‘ydi?» va «Qanday
                yo‘l tutishimiz kerak-ki, bu narsalar kichikroq ko‘rinishda
                bo‘lsa ham qaytarilmasin?» bo‘lishi kerak. <br />
                <br />
                Ro‘y bergan voqealarni tom ma’noda «genotsid» deb atab
                bo‘lmasa-da xalqning eng ziyoli, sara, intellektual qatlamini
                qirish orqali millat ruhini yulib olingandek bo‘ldi. Va natijada
                aholida erkin, ozod fikrlash xususiyatlari yo‘q qilindi,
                totalitar ong, qo‘rquv ruhiyati, qullik ko‘nikmalari musthakam
                o‘rnatildi… <br />
                <br />
                Biz, balki xali ham shu jinoyatlar asoratini saqlab
                qolgandirmiz? Tozalanib olish vaqti kelmadimi? <br />
                <br />
                Men bu ishlarda o‘zga millatni umumiy ravishda ayblashlikka
                qarshiman, chunki bolsheviklar repressiyalarni har bir sovet
                ittifoqi respublikalarida ommaviy olib bordi. <br />
                <br />
                Bolsheviklar progressiv va ozodbaxsh g‘oyalari bilan juda katta
                aholi qismini ortlaridan ergashtira oldilar. Shu bilan birga
                bolsheviklar o‘z mafkura va tizimlarini joriy qilishda eng
                mudhish ishlardan jirkanmay foydalandilar. Oqibatda «maqsad
                vositalarni oqlaydi» deb, o‘zlarining adolat qadriyatlari chetda
                qolib, fasod vositalari quliga aylanishdi. <br />
                <br />
                Bu ham bizga ibrat. Qanchalik erksevar, haqiqatparvar bo‘lmaylik
                ishlarimizda to‘g‘rilik, halollik o‘lchovlaridan voz
                kechamasligimiz kerak. Asosiy mezon tor siyosiy manfaatlar emas
                adolat va rahmdillik bo‘lishi darkor. <br />
                <br />
                Yana bir ibrat: oddiy odamlardagi hasad, ko‘rolmaslik,
                ig‘vogarlik, kaltafahmlik kabi kamchiliklariga siyosiy tus va
                siyosiy kuch berilsa ular to‘fonni buzib o‘tadigan sel kabi
                katta talofatlarni keltirib chiqarar ekan. <br />
                <br />
                Bizda, xalqimizda shu illatlar borligini e’tirof etib, ulardan
                poklanishga intilish, tuban g‘arizalarimizni tiya olishni
                o‘rganishimiz zarur! Buning uchun ham 38 yil oktyabr, undan
                oldin va keyin sodir bo‘lgan qatag‘onlarni, qatllarni yod etib
                turish kerak bo‘ladi. <br />
                <br />
                Bundan boshqa ko‘p ibratlar olish mumkindir. Ammo yod etish
                faqatgina ibrat uchun emas balki bu insoniy burchni ado etish
                ham. O‘tmish xotirasi bu – o‘tgan ajdodlar bilan ma’naviy
                bog‘liqlikni his qilish degani. Boshqa jonzotlardan shu narsa
                bilan ham farq qilsak kerak. <br />
                <br />
                Men do‘stlarimga «Unutmaylik va boshqa hech qachon
                qaytarilishiga yo‘l qo‘ymaylik» deb murojaat qilaman.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xs text-gray-500">
                <p>10:10</p>
                <div className="w-2 h-2 rounded-full bg-[#D9D9D9] block"></div>
                <p>13.06.2024</p>
              </div>
              <div className="flex gap-5 font-bold text-xs">
                <div className="flex gap-2">
                  <img className="size-4" src={search} alt="search.svg" />
                  5.6 ming
                </div>
                <div className="flex gap-2">
                  <img className="size-4" src={comment} alt="comment.svg" />5
                  yuz
                </div>
                <div className="flex gap-2">
                  <img className="size-4" src={share} alt="share.svg" />
                  25
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Tarix;
