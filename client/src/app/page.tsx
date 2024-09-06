import { getHomePageProps } from "@/api/pages/getHomePageProps";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default async function Home() {
  const homePageData = await getHomePageProps();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-28 md:p-14 light text-foreground bg-background p-8">
      <Hero />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        consequat diam sit amet felis lobortis, laoreet fringilla metus aliquet.
        Nam vitae odio ac nisl venenatis sagittis sit amet vitae metus. Morbi in
        pellentesque massa. Proin bibendum massa et neque fringilla volutpat.
        Nulla leo justo, dapibus at pulvinar id, luctus sit amet eros. Proin ut
        aliquam velit. Cras hendrerit imperdiet justo ac lobortis. Etiam
        pellentesque consectetur elit non ultrices. Maecenas et pretium nunc.
        Vivamus tempus mollis pulvinar. Mauris pellentesque, tellus et sagittis
        sagittis, diam metus ullamcorper lacus, nec ornare turpis quam semper
        turpis. Proin id mauris vitae turpis tempus lobortis eget eu nunc.
        Vestibulum vel feugiat libero, a lobortis justo. Nulla eu ullamcorper
        urna. Donec eu lorem est. Duis gravida, nisi non bibendum vulputate,
        orci diam ultrices lectus, in rhoncus nulla quam eget elit. Aenean vel
        ante vulputate, dictum risus eget, ultricies nunc. Proin elementum
        turpis quis lacinia molestie. Ut posuere at est non commodo. Donec id
        mauris quis massa maximus blandit. Curabitur mattis varius tincidunt.
        Duis dapibus, nulla quis laoreet bibendum, purus sem aliquam quam, eu
        eleifend nibh magna sodales purus. Cras nibh lacus, congue non vulputate
        at, posuere in lectus. Cras vitae augue orci. In tincidunt rhoncus augue
        nec ullamcorper. Suspendisse quis luctus lorem, ut lobortis lectus.
        Donec laoreet id tortor ac imperdiet. Cras tincidunt augue eleifend enim
        interdum, eu auctor est egestas. Pellentesque blandit pellentesque
        tellus at suscipit. Vestibulum tempor efficitur arcu, ac tristique ipsum
        dictum quis. Mauris ut hendrerit justo, eget cursus quam. Nulla
        elementum tellus metus, sit amet faucibus magna fermentum in. Nulla
        blandit nisl vitae tortor mollis, in semper lorem lobortis. Curabitur
        orci lectus, aliquam auctor ligula sit amet, gravida faucibus velit. Sed
        semper lacinia velit, consectetur pulvinar lectus. Integer congue,
        tortor a rhoncus gravida, erat orci venenatis diam, nec interdum odio
        augue et lorem. Donec eleifend sed mi sit amet fermentum. Ut quis risus
        et lorem tristique facilisis. Nullam id tortor vitae lorem auctor
        feugiat sit amet vel velit. Etiam a fringilla diam. Praesent vel diam
        eget justo aliquam sodales. Aliquam sed arcu malesuada, pellentesque
        ipsum eget, varius nisl. Quisque ut sapien in metus pellentesque cursus.
        Suspendisse potenti. Pellentesque lobortis mauris nibh, eget aliquam
        massa euismod vitae. Aenean vel cursus odio, in malesuada erat. Aenean
        pellentesque risus a libero vulputate tincidunt. Vivamus feugiat et enim
        et fermentum. Morbi eleifend orci eget mauris blandit porta. Donec eget
        elit sed velit molestie euismod sit amet ut est. Morbi cursus turpis
        est, eu imperdiet erat ornare at. Ut ligula lorem, viverra sed lorem et,
        sodales pulvinar tellus. Proin consectetur tempus tincidunt. Sed pretium
        vehicula lacus a tincidunt. Nullam et felis urna. Praesent at convallis
        ex, quis finibus erat. Maecenas auctor lorem a magna faucibus bibendum.
        Integer ut tellus scelerisque, lacinia nisl ultricies, feugiat sem.
        Maecenas id quam quis ante lobortis malesuada. Aenean ante nibh, laoreet
        quis finibus id, maximus eu tellus. Sed id consectetur arcu, ac iaculis
        libero. Ut non quam massa. Quisque sit amet mauris lectus. Vivamus
        convallis condimentum massa, volutpat suscipit nibh vehicula ornare.
        Etiam in bibendum lacus. In sed ipsum varius, sodales lectus sit amet,
        eleifend diam. Morbi ultrices fringilla sem, pretium malesuada orci
        sagittis ac. Donec non dapibus neque. Proin purus est, ullamcorper quis
        augue sed, euismod imperdiet est. Sed ac felis ac nisi tempus lacinia id
        sed tellus. Sed id tortor odio. Maecenas pretium a libero vitae aliquet.
        Phasellus vitae neque efficitur, egestas mi in, tempor enim. Cras in
        scelerisque lectus. Praesent posuere, ex vitae fringilla ultricies, mi
        urna dapibus ex, sed egestas elit risus at ipsum. Duis scelerisque lacus
        ex, ac pulvinar nibh pretium sit amet. Curabitur tempor, ante a
        vulputate facilisis, lorem purus placerat tellus, vehicula vulputate
        ipsum ipsum a est. Praesent venenatis cursus magna et cursus. Sed
        venenatis posuere massa at tempor. Nam laoreet placerat leo vel
        fringilla. Sed nec varius leo, non ultrices velit. Quisque ex tellus,
        rutrum eget nibh non, blandit sodales enim. Duis molestie, leo interdum
        euismod laoreet, mi sapien vehicula ante, at lacinia orci enim id sem.
        Aenean hendrerit ante ornare, fringilla dui non, laoreet turpis. Fusce
        vel efficitur purus. Pellentesque non accumsan quam. Sed suscipit nec
        risus et lacinia. Suspendisse nibh elit, hendrerit a congue a, finibus
        sed orci. Phasellus non purus dapibus, scelerisque ipsum at, suscipit
        velit. Nullam quis diam eget ante euismod viverra. Donec convallis
        luctus varius. Suspendisse at orci eu risus elementum sodales. Donec in
        metus eu erat tincidunt malesuada. Cras quis nunc a neque pulvinar
        congue eget vel quam. Nulla non sem sit amet tortor porta blandit sed
        sed est. Aliquam neque metus, malesuada et tortor ac, suscipit sagittis
        nibh. Nullam varius tempor lacinia. Vivamus blandit risus sit amet est
        auctor commodo. Mauris sit amet sapien ut magna maximus consequat id sed
        dui. Morbi at purus suscipit, luctus nulla in, consequat massa. Donec
        metus sapien, laoreet interdum justo non, tincidunt pulvinar risus.
        Fusce facilisis arcu sed velit vulputate pulvinar. Nam vel turpis sit
        amet ipsum egestas euismod. Mauris id dolor nec lorem dapibus maximus.
        Etiam egestas ante at elit imperdiet, vitae blandit nisl sollicitudin.
        Aliquam erat volutpat. Sed iaculis aliquet justo, ac iaculis velit
        mattis luctus. Phasellus est felis, vehicula sagittis odio non, accumsan
        luctus mi. Aenean tempor nulla id feugiat ornare. Morbi vestibulum, arcu
        nec blandit efficitur, augue orci gravida velit, pharetra egestas quam
        lacus at orci. Nunc quis sapien ac nisi eleifend rhoncus. Ut nec
        ultricies orci, et facilisis justo. Donec vitae consequat felis.
        Praesent eu erat et nisi aliquam sodales id eget velit. Vivamus dictum
        finibus congue. Aenean sed elit faucibus, posuere lacus vitae, facilisis
        est. Integer id commodo lacus. Pellentesque blandit lobortis lorem
        fringilla hendrerit. Cras a lorem pharetra, maximus tellus nec,
        tincidunt lorem. Nulla suscipit justo justo, id gravida nisl rutrum non.
        Ut faucibus sagittis magna, eget faucibus tellus faucibus vestibulum.
        Nulla tincidunt suscipit viverra. Curabitur vitae eros non orci porta
        rutrum non ut velit. Phasellus a libero vel nisi eleifend placerat. Duis
        est quam, facilisis vitae convallis vel, pulvinar eu neque. Nulla
        ullamcorper orci id arcu hendrerit facilisis. Curabitur fermentum congue
        commodo. Aliquam non auctor nunc. Fusce eget finibus quam. Pellentesque
        dapibus neque in tortor lacinia, sit amet tincidunt elit dignissim.
        Fusce tincidunt efficitur vestibulum. Aenean aliquet faucibus sapien sed
        elementum. Vestibulum eget elit in diam placerat scelerisque. Proin sed
        purus purus. Nunc porta rhoncus egestas. Donec placerat efficitur felis
        quis lobortis. Nulla condimentum sagittis nulla, ac suscipit sapien
        egestas sit amet. Fusce aliquet felis nec libero iaculis iaculis.
        Suspendisse nec diam finibus, lobortis leo vel, viverra nunc. Maecenas
        pretium sagittis erat ut sagittis. Quisque convallis purus ut nunc
        pretium posuere. Vivamus finibus congue lectus, eu vulputate felis
        eleifend vel. Sed auctor ornare leo, nec euismod sem laoreet et. Proin
        congue nulla ut elementum volutpat. Suspendisse pellentesque laoreet
        facilisis. Cras interdum nunc sed elit convallis tempus. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Ut ut justo rutrum, gravida leo tincidunt, faucibus enim. Morbi
        faucibus mi eget ex viverra rhoncus in quis nisl. Cras eu felis dolor.
        In molestie venenatis tincidunt. Integer consectetur velit velit, nec
        pharetra neque fermentum ut. Maecenas vestibulum odio ac elit iaculis,
        ut condimentum nibh dapibus. Praesent ultricies fermentum rutrum.
      </p>
    </main>
  );
}
