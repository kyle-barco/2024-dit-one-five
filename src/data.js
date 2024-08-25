import { v4 as uuid } from "uuid";
import jim from "../src/assets/images/officers/jim.webp";
import keisha from "../src/assets/images/officers/keisha.webp";
import me from "../src/assets/images/officers/me.webp";
import sophia from "../src/assets/images/officers/sophia.webp";
import wency from "../src/assets/images/officers/wency.webp";

const data = [
  {
    officers: [
      {
        id: uuid(),
        name: "Jim Christian De Vera",
        pos: "President",
        image: jim,
        fbLink: "https://m.facebook.com/jimchristian.devera.1",
      },
      {
        id: uuid(),
        name: "Dave Stephen Llaguno",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDoDf6Xkg0pAqnKLCABm4cxKuAPT4iz_NELW3RycIJVyA&oe=66F083FA",
        pos: "Vice President",
        fbLink: "https://m.facebook.com/davestephen.llaguno.6166",
      },
      {
        id: uuid(),
        name: "Keisha Kikoa Parreño ",
        pos: "Secretary",
        image: keisha,
        fbLink: "https://m.facebook.com/keishakikoa",
      },
      {
        id: uuid(),
        name: "Kyle Barco",
        pos: "Acting Officer",
        image: me,
        fbLink: "https://www.facebook.com/kylebarco9",
      },
      {
        id: uuid(),
        name: "Sophia Grace Vicente",
        pos: "Acting Officer",
        image: sophia,
        fbLink: "https://m.facebook.com/xcx.laurcabello",
      },
      {
        id: uuid(),
        name: "Wency A Geraldo",
        pos: "Acting Officer",
        image: wency,
        fbLink: "https://m.facebook.com/wency.geraldo.7",
      },
    ],
    students: [
      {
        id: uuid(),
        name: "Aldrin Clark Adino",
        Date: "3/8/2003",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/449076081_1262894731343171_8289969614355874607_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=LhXKGkIEKUwQ7kNvgHZ_gBx&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYC3gJr8_GfwrxRC6cbl6KlfFOiRX4Ltb4DJ00bxixMg2A&oe=66CEF15A",
      },
      {
        id: uuid(),
        name: "Angel Mharkie D. Cabales",
        Date: "10/11/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/453775187_1401405981248839_7197587005566040204_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=2dnu3p5k3NsQ7kNvgGDKN3q&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYCiGCOVUSrnXQOg3cXlnGtLZwwnlx0g0WyH7G1yjFDZXQ&oe=66CEDC07",
      },
      {
        id: uuid(),
        name: "Antonette F. Formento ",
        Date: "1/17/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/451325667_450785421177753_7685858342172473000_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=b3Z5Fh4dZS0Q7kNvgF1-3tf&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDD88w08WV1YEPYmm1sjHAHM6ahAbQIrmx1A2RbDV1EuA&oe=66CEEF73",
      },
      {
        id: uuid(),
        name: "Bernadette P. Pangilinan",
        Date: "11/16/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDoDf6Xkg0pAqnKLCABm4cxKuAPT4iz_NELW3RycIJVyA&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Carl Bernard B. Cortez",
        Date: "10/9/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/434350901_3749516781994338_6472581187901735118_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=3FUMnSoqwxoQ7kNvgEDXyUZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYCTD05puY-viq05lT4MLvNgDicu7YaTtWN4m_99Oell-w&oe=66CEC6C3",
      },
      {
        id: uuid(),
        name: "Chris John Albert C. Bagacina",
        Date: "3/22/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-1/419992783_1782801318860897_6099045051592149747_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=IidaEE3cGu0Q7kNvgGOdguz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-1.fna&oh=00_AYBu85QcieImxf_PU-qIpJO4pUbQZcZaTxXYJ6LtXs6dzg&oe=66CEED7C",
      },
      {
        id: uuid(),
        name: "Christian Josh Rojas",
        Date: "",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.6435-1/80477782_2547965641969084_8345538755150479360_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=e4545e&_nc_ohc=jRVA90ThRQ4Q7kNvgG1iOls&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYAtsty-ccl2cjkRgaHNN8OVFHqrh-AgHuFAzSijuJfBhg&oe=66F07521",
      },
      {
        id: uuid(),
        name: "Claude Martin Evangelista",
        Date: "11/8/2004",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDoDf6Xkg0pAqnKLCABm4cxKuAPT4iz_NELW3RycIJVyA&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Earl Laurence Arboleda",
        Date: "",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDoDf6Xkg0pAqnKLCABm4cxKuAPT4iz_NELW3RycIJVyA&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Elaine Lara V. Balauro ",
        Date: "3/11/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDoDf6Xkg0pAqnKLCABm4cxKuAPT4iz_NELW3RycIJVyA&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Ellina Denise T. Samonte",
        Date: "1/23/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/422174528_2010421589340046_7170918403492753585_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=aYZcrp54JJUQ7kNvgE4mHvP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-2.fna&oh=00_AYDe_p3H4QF6ng5whH7NjrM35izzb60uDaA2KFU9BJsrIA&oe=66CEC013",
      },
      {
        id: uuid(),
        name: "Gabriel Achilles S. Palattao",
        Date: "8/16/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/453739286_1792640561272907_3454448307249189057_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=2dJ2MnBHJooQ7kNvgEJLWPb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYDUhp2qnu74NA3CvjB8y-qWYr1V5ehyBg85fO9rwddZcg&oe=66CED71B",
      },
      {
        id: uuid(),
        name: "Glynicel B. Vicente",
        Date: "1/8/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/449854654_1758231684983075_1977767758555902507_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=aTIhSFeGTGIQ7kNvgGc1DOz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYAGZnkhrzPRC027cQUzwGs6Dqm6kjblcMwpC7tUtVWB1w&oe=66CEC2C2",
      },
      {
        id: uuid(),
        name: "Hans Joseph Torres Caluya",
        Date: "7/23/2004",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/238387885_1491272757886079_4863424770442882147_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=tffw-40PJcIQ7kNvgEbCrCb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-2.fna&oh=00_AYAmuWrUQH8yN_nXiSjIe-v7wyrPQiRmqgpNYkBoV3as3A&oe=66CEE090",
      },
      {
        id: uuid(),
        name: "Harian Joy S. Avenilla ",
        Date: "8/12/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/339458206_932486907950571_7156719222144755661_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=VtdfuOMtGtUQ7kNvgFszEWF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYAW02IAZZikULMFssd3ATZYUjEMDJ4_3Et80zb6XiyeGQ&oe=66CEE023",
      },
      {
        id: uuid(),
        name: "Hazelle Portento",
        Date: "5/29/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/441082501_950425746872182_6274462085563405701_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=DflcQvV-VP4Q7kNvgFspBZt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDtqVMdCZpJHFBVtuaC7BO4sCWF6gmhHupcMw4bX3uY4Q&oe=66CEC94F",
      },
      {
        id: uuid(),
        name: "Jess Mathew P. Layno",
        Date: "12/6/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/444487267_7623140411136995_1906968689599593275_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Hm_9QQCpXDEQ7kNvgFsiG7h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYAj-pc1HqDteSCNCtn-oWfzWFRaf7YI38cRVFkQ7nwKiw&oe=66CED211",
      },
      {
        id: uuid(),
        name: "Jhon Chris Tablatin",
        Date: "",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYAxfVt-KmEbCygj3x8AFD5cqpQMb9ffTQlaDoo2WrJKwQ&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Joaquin Enrico L Capistrano ",
        Date: "1/15/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/453594032_514865380980954_6500084838178949719_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cUp4PJ2f_mYQ7kNvgFe8B8c&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYAeC9lMW9xwlrAZwWzxRyGU1_iOYd0x4bNCHzuysQ7NSQ&oe=66CF0E49",
      },
      {
        id: uuid(),
        name: "John Gabriel Palomo",
        Date: "10/25/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/444988613_429965406496024_2422343616424394511_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=hY_uS1JYnKIQ7kNvgFQddYr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYA1Y_XZ04a9LK8HECm16LIAUxI6o61iScWVX5T5I68CxA&oe=66CEECC2",
      },
      {
        id: uuid(),
        name: "John Vergel Q. Brioso",
        Date: "3/8/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/448112414_458289773564956_3618084861237573451_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Ny7AFhxd1WEQ7kNvgFA9XPK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYBBiiyNlUsn6QkP6S4gVSuCq3RCpbwVeqz8C-7z_Lj0xQ&oe=66CEDE62",
      },
      {
        id: uuid(),
        name: "Joseph L. Rosete",
        Date: "8/22/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/453884841_846083647463486_8082221398181527600_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=oyOWsKpzf6YQ7kNvgEzP9RE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-2.fna&oh=00_AYCtgPIoYaCkvbYdP7ripoZvbarNwB2NbygjRxHuC0KbfQ&oe=66CECE9E",
      },
      {
        id: uuid(),
        name: "Kate Nica C. Advincula",
        Date: "8/19/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYAxfVt-KmEbCygj3x8AFD5cqpQMb9ffTQlaDoo2WrJKwQ&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Ma. Sophia Estaras",
        Date: "6/22/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/405924118_1387838358763374_5800150938267806152_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=jJATnAZT24IQ7kNvgHCpGw8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-2.fna&oh=00_AYDHZ4zb3VLwirWE2ugatiqCMbgxaMhuwoQOV9ygwLH8QQ&oe=66CEE5E4",
      },
      {
        id: uuid(),
        name: "Mark Jairus Ocampo",
        Date: "10/11/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/454760289_1543264163277332_4181834853494037614_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=SuUBVxxrFDkQ7kNvgHZSYGT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYD_dVSxL5zIMfdYt1C_M4Oj_1MNYgs8ZBbTPLMkyvu45w&oe=66CEC018",
      },
      {
        id: uuid(),
        name: "Mark Joseph L. Braza",
        Date: "3/14/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/275743708_689442358904711_4295183452206301119_n.jpg?stp=c0.0.416.416a_dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=1dpJITuQFFQQ7kNvgFSYnax&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-2.fna&oh=00_AYB-yRUEjDEeAAofisuziyMusg1BXNacdTnfb6ThLnZF0Q&oe=66CECD1A",
      },
      {
        id: uuid(),
        name: "Mark Oliver Linag",
        Date: "11/8/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-1/453658271_122155827800235703_1307396160952391783_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=QCPb3thi_dsQ7kNvgGFKpLY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-1.fna&oh=00_AYB6dhyOV8GHkJ9cHN-VTlbuLasIB27tC1BCa-0nmIQBkg&oe=66CEF271",
      },
      {
        id: uuid(),
        name: "Micah Maureen D. Guda",
        Date: "12/9/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/454507276_480978774868999_4432057193212498513_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=un8ku3BcJdkQ7kNvgHcthja&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYBJkYAZ_GmCHT3kxcB3QTwiHzBB75cUpaeIdiDPrI84NQ&oe=66CED56F",
      },
      {
        id: uuid(),
        name: "Mikaella Jezel J. Licup ",
        Date: "1/11/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-1/455044202_2574486919605495_4200560550031984732_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=ByZt_3AgvngQ7kNvgE4xLLM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-1.fna&oh=00_AYCqOtYeFbLs0UbrIHrHKg6_Ly2xV_fEyO1aZ8l3AKSyoA&oe=66CEBE03",
      },
      {
        id: uuid(),
        name: "Monrick Joshua B. Mandap",
        Date: "2/18/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/454847879_1219828972383767_8364545929932142531_n.jpg?stp=dst-jpg_s100x100&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MkVj8fq-RsMQ7kNvgH5wQnG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYDpL57X69MwiHFTopjHlPM1JCJdNu9BCGWnhG1vkxUyhw&oe=66CEC3C9",
      },
      {
        id: uuid(),
        name: "Nil Jon V. Amagsila",
        Date: "6/12/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-1/448475942_2206332046385827_3300598122136016448_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=CTN5Tg6sQdgQ7kNvgFaT5AL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-2.fna&oh=00_AYBZSi93iS_MX9aU1D0LxT3_meBjohGFPQrTwTXWema5zA&oe=66CEE4E5",
      },
      {
        id: uuid(),
        name: "Rico T. Mendoza",
        Date: "11/22/2004",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-1/436121163_3727351620870988_2160352301283135433_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=QERJSM6aVPQQ7kNvgHgBYAY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-1.fna&oh=00_AYCiF4LYtzc7RMuF4a5CCVuaS7ZDaZCemKx8lmtyZf1-TQ&oe=66CED018",
      },
      {
        id: uuid(),
        name: "Savina T. Lilagan",
        Date: "9/29/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/456287054_519606407121580_6550730319139302325_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=E1WOlS-hPgAQ7kNvgE0a8zL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYBBNtAalJjMDv0CfglnQEvcj0kB7uePP3m8dYOE3p-gvA&oe=66CEF019",
      },
      {
        id: uuid(),
        name: "Sean Andrei C. Benedicto ",
        Date: "9/1/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/451842084_10226816202214507_4094771626565539343_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=9oTHaie55ZEQ7kNvgHCiDm4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYD-lBXWDW1DcwQPIKSS2I_jGIWKJy9amUT9AJ8lrbCLMQ&oe=66CEC137",
      },
      {
        id: uuid(),
        name: "Sean Luis Ashton B. Neri",
        Date: "5/21/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=ANaUE6Y_shwQ7kNvgFQRtov&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDoDf6Xkg0pAqnKLCABm4cxKuAPT4iz_NELW3RycIJVyA&oe=66F083FA",
      },
      {
        id: uuid(),
        name: "Thomas Angelo N. Ingal",
        Date: "4/6/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-1/51327419_530780397431309_7785641187741794304_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=e4545e&_nc_ohc=742dQJoor1YQ7kNvgFhKx23&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-1.fna&oh=00_AYA3HuqWkV-1AzqDt0UvdTetMBzF-cPy6TMYEl1-Ts4DSw&oe=66F084FC",
      },
      {
        id: uuid(),
        name: "Tracy Benito",
        Date: "",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/454475413_1561295194824117_7777459332381914096_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=4Qz9oh8nHWgQ7kNvgFD4tK0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYDv0pcbKzOgOVDhpGI65mcvv1bgqYkuK3Y8pPY9bg4wPw&oe=66CECC43",
      },
      {
        id: uuid(),
        name: "Venize Mica M. Montojo ",
        Date: "1/4/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/453508375_3376402789329736_2714311954569604198_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=TXI6rAxWwkEQ7kNvgEwbY_N&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-2.fna&oh=00_AYBxNYHLeUwA6-BfgdXXQ9u0I46YZKwx3evxoEqjfPp47g&oe=66CEE949",
      },
      {
        id: uuid(),
        name: "Warren Lee Ople",
        Date: "6/4/2006",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/447784769_2736109389886809_1072140594365627750_n.jpg?stp=dst-jpg_s100x100&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=l9T7tRBqMHsQ7kNvgFgENeN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYA6700u3dUE_VjO0bl5sXBnCfUOITyTVhFWXaaNJHe0nw&oe=66CECA0C",
      },
      {
        id: uuid(),
        name: "Yvhes M. Tolentino",
        Date: "9/22/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/341003452_136492792712251_8426227350049633105_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=M7SfHmTobVIQ7kNvgFxMHnT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl3-4.fna&oh=00_AYCBDljaQ0xsA2b5yG4MLUHKRuly366SmEbxF1VTO_qG0A&oe=66CEE866",
      },
      {
        id: uuid(),
        name: "Zander B. Dellumas",
        Date: "8/22/2005",
        pos: "DIT 1-5 Student",
        image:
          "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/452112228_1970495390134385_3140595139957111897_n.jpg?stp=dst-jpg_s100x100&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=5P_jiS-AdtMQ7kNvgGHmYUM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl37-1.fna&oh=00_AYDg9ebYYe38XVub_ldMGknuJyXMRUa3B87cB_MFRPJeyg&oe=66CEDF9B",
      },
    ],
  },
];

export default data;
