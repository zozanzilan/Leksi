const FLOOR_HEIGHT = 48;

const k = kaplay({
    global: false, 
});

kaplay({
    width : 1920,
    height : 1080,
    letterbox : true,
});


setBackground(212, 110, 179);

//!police
loadFont("opendyslexic", "assets/OpenDyslexic-Regular.otf");
loadFont("Montserrat", "assets/Montserrat-Medium.otf");

//!musique
loadMusic("boucle", "assets/boucle leksi.wav");
loadMusic("intro", "assets/intro leksi.wav");

//!sprite acceuil et choix difficulté :
loadSprite("boutonvert", "/assets/boutonvert.png");
loadSprite("boutonjaune", "/assets/boutonjaune.png");
loadSprite("boutonbleu", "/assets/boutonbleucoupe.png");
loadSprite("boutonrose", "/assets/boutonrose.png");
loadSprite("boutonrose2", "/assets/boutonrose2.png");
loadSprite("boutonorange", "/assets/boutonorange.png");
loadSprite("boutonviolet", "/assets/boutonviolet.png");
loadSprite("fondaccueil", "/assets/fondaccueil.png");
loadSprite("titre", "/assets/titre.png");

//!sprite tuto
loadSprite("tutobravo", "/assets/tutobravo.png");
loadSprite("tutoclavier", "/assets/tutoclavier2.png");
loadSprite("tutoflèche", "/assets/tutofleche.png");
loadSprite("tutolunette", "/assets/tutolunette.png");
loadSprite("tutomonstre", "/assets/tutomonstre.png");
loadSprite("tutoperdu", "/assets/tutoperdu.png");

//!sprite jeu
loadSprite("heroine", "/assets/joueureusecoupe.png");
loadSprite("heroinelunette", "/assets/heroinelunette.png");
loadSprite("fondjeu", "/assets/fondbleu2.png");
loadSprite("monstre", "/assets/monstrecoupe.png");
loadSprite("barrerouge", "/assets/barrerougefondblanc.png");
loadSprite("barrevert", "/assets/barrevertfondblanc.png");
loadSprite("flèchebleu", "/assets/flechebleu.png");
loadSprite("flècherouge", "/assets/flecherouge.png");
loadSprite("flècheverte", "/assets/flecheverte.png");
loadSprite("dessinpause", "/assets/pause.png");
loadSprite("dessinAE", "/assets/dessin ae.png");
loadSprite("dessinBD", "/assets/dessin bd.png");
loadSprite("dessinQP", "/assets/dessin qp.png");
loadSprite("dessinEsc", "/assets/dessin Esc.png");
loadSprite("écritAE", "/assets/ecrit ae.png");
loadSprite("écritDB", "/assets/ecrit db.png");
loadSprite("écritQP", "/assets/ecrit qp.png");
loadSprite("écritEsc", "/assets/ecrit Esc.png");
loadSprite("titre2", "/assets/titre2.png");

//!sprite fin
loadSprite ("perdu", "/assets/perdu.png");
loadSprite ("bravo", "/assets/bravo2.png");

setGravity(2400);

const musiqueintro = play("intro", {loop : true});

scene("accueil", () => {
    
//MUSIQUE    
    const musiqueintro = play("intro", {loop : true});
    onSceneLeave(()=>{
        musiqueintro.stop();
    })

    //!image de fond
    add([
        sprite("fondaccueil"),
        pos(0, 0),
        scale(1),
        anchor("topleft"),
        z(-100),
      ]);

    // Démarrage de la musique
   // const musique = play("musique");

   const centerX = center().x;
   const centerY = center().y;

   let enRotation1 = false;
   let enRotation2 = false;
   let enRotation3 = false;
   
    //!image titre
      add([
        sprite("titre"),
        pos(centerX, centerY -200),
        scale(0.5),
        anchor("center"),
        z(10),
      ]);

    //!bonton Histoire
        const boutonHistoire = add([
        sprite("boutonbleu"),
        scale (0.4, 0.4),
        pos (centerX - 550, centerY + 200),
        anchor ("center"),
        area(),
        opacity(),
        rotate(0),
        "boutonhistoire"
        ]);

        add([
        text("mode histoire", { size: 55, font: "opendyslexic" }),
        pos(centerX - 550, centerY + 375),
        anchor("center"),
        color(rgb(149, 143, 232, 1)),
        ]);

        boutonHistoire.onHover(() => {
        enRotation1 = true;
       boutonHistoire.scale = vec2(0.5, 0.5);
        });
    
        boutonHistoire.onHoverEnd(() => {
        enRotation1 = false;
        boutonHistoire.scale = vec2(0.4, 0.4);
        });
    
        boutonHistoire.onUpdate(() => {
        if (enRotation1) {
            boutonHistoire.angle += 180 * dt(); 
        }
        });

        onClick ("boutonhistoire", () =>{
        go ("choixDifficulte")
        })
    
    //!bouton Infini
        const boutonInfini = add([
            sprite("boutonrose"),
            pos (centerX, centerY + 200),
            anchor ("center"),
            scale (0.4, 0.4),
            area(),
            rotate(0),
            "boutoninfini"
        ]);

        add([
            text("mode infini", { size: 55, font: "opendyslexic" }),
            pos (centerX, centerY + 375),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

        boutonInfini.onHover(() => {
            enRotation2 = true;
            boutonInfini.scale = vec2(0.5, 0.5);
        });
    
        boutonInfini.onHoverEnd(() => {
            enRotation2 = false;
            boutonInfini.scale = vec2(0.4, 0.4);
        });
    
        boutonInfini.onUpdate(() => {
            if (enRotation2) {
                boutonInfini.angle += 180 * dt(); 
            }
        });

        onClick ("boutoninfini", () =>{
            go ("infini")
        });

    //!bouton Vitesse
        const boutonVitesse = add([
            sprite("boutonvert"),
            scale (0.4, 0.4),
            pos (centerX + 550, centerY + 200),
            anchor ("center"),
            area(),
            opacity(),
            rotate(0),
            "boutonvitesse"
        ]);

        add([
            text("mode vitesse", { size: 55, font: "opendyslexic" }),
            pos (centerX + 550, centerY + 375),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

        boutonVitesse.onHover(() => {
            enRotation3 = true;
            boutonVitesse.scale = vec2(0.5, 0.5);
        });
    
        boutonVitesse.onHoverEnd(() => {
            enRotation3 = false;
            boutonVitesse.scale = vec2(0.4, 0.4);
        });
   
        boutonVitesse.onUpdate(() => {
            if (enRotation3) {
                boutonVitesse.angle += 180 * dt(); 
            }
        });
    

        onClick ("boutonvitesse", () =>{
            go ("vitesse")
        });

});

let difficultéActuelle = "facile"; 

scene ("choixDifficulte", () =>{
    
//MUSIQUE    
    const musiqueintro = play("intro", {loop : true, volume: 0.5,});
    onSceneLeave(()=>{
        musiqueintro.stop();
    })

    //!image de fond
        add([
            sprite("fondaccueil"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);

        add([
            text ("Choisis ton niveau", { size: 80, align: "center", font: "opendyslexic" }),
            pos(center().x, 200),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

    let enRotation1 = false;
    let enRotation2 = false;
    let enRotation3 = false;
    let enRotation4 = false;

    //!bouton facile
        const boutonfacile = add([
            sprite("boutonjaune"),
            scale (0.4, 0.4),
            pos (384, 550),
            anchor ("center"),
            area(),
            rotate(0),
            "boutonfacile"
        ]);

        add([
            text("niveau 1", {size: 55, font: "opendyslexic" }),
            pos(384, 750),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

        boutonfacile.onHover(() => {
            enRotation1 = true;
            boutonfacile.scale = vec2(0.5, 0.5);
        });
    
        boutonfacile.onHoverEnd(() => {
            enRotation1 = false;
            boutonfacile.scale = vec2(0.4, 0.4);
        });
    
        boutonfacile.onUpdate(() => {
            if (enRotation1) {
                boutonfacile.angle += 180 * dt(); 
            }
        });
    
        onClick ("boutonfacile", () =>{
            difficultéActuelle = "facile";
            go("tuto");
        });
    
    //!bouton moyen
        const boutonmoyen = add([
            sprite("boutonrose2"),
            scale (0.4, 0.4),
            pos (768, 550),
            anchor ("center"),
            area(),
            rotate(0),
            "boutonmoyen"
        ]);

        add([
            text("niveau 2", { size: 55, font: "opendyslexic" }),
            pos(768, 750),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

        boutonmoyen.onHover(() => {
            enRotation2 = true;
            boutonmoyen.scale = vec2(0.5, 0.5);
        });
    
        boutonmoyen.onHoverEnd(() => {
            enRotation2 = false;
            boutonmoyen.scale = vec2(0.4, 0.4);
        });
    
        boutonmoyen.onUpdate(() => {
            if (enRotation2) {
                boutonmoyen.angle += 180 * dt(); 
            }
        });
    
        onClick ("boutonmoyen", () =>{
            difficultéActuelle = "moyen";
            go("jeu", { difficulté: difficultéActuelle });
        });
    
    //!bouton difficile
        const boutondifficile = add([
            sprite("boutonorange"),
            pos (1152, 550),
            anchor ("center"),
            area(),
            rotate(0),
            scale (0.4, 0.4),
            "boutondifficile"
        ]);

        add([
            text("niveau 3", { size: 55, font: "opendyslexic" }),
            pos(1152, 750),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

        boutondifficile.onHover(() => {
            enRotation3 = true;
            boutondifficile.scale = vec2(0.5, 0.5);
        });
    
        boutondifficile.onHoverEnd(() => {
            enRotation3 = false;
            boutondifficile.scale = vec2(0.4, 0.4);
        });

        boutondifficile.onUpdate(() => {
            if (enRotation3) {
                boutondifficile.angle += 180 * dt(); 
            }
        });

        onClick ("boutondifficile", () =>{
            difficultéActuelle = "difficile";
            go("jeu", { difficulté: difficultéActuelle });
        });

    //!bouton expert
        const boutonexpert = add([
            sprite("boutonviolet"),
            pos (1536, 550),
            anchor ("center"),
            area(),
            rotate(0),
            scale (0.4, 0.4),
            "boutonexpert"
        ]);

        add([
            text("niveau 4", { size: 55, font: "opendyslexic" }),
            pos(1536, 750),
            anchor("center"),
            color(rgb(149, 143, 232, 1)),
        ]);

        boutonexpert.onHover(() => {
            enRotation4 = true;
            boutonexpert.scale = vec2(0.5, 0.5);
        });
    
        boutonexpert.onHoverEnd(() => {
            enRotation4 = false;
            boutonexpert.scale = vec2(0.4, 0.4);
        });

        boutonexpert.onUpdate(() => {
            if (enRotation4) {
                boutonexpert.angle += 180 * dt(); 
            }
        });

        onClick ("boutonexpert", () =>{
            difficultéActuelle = "expert";
            go("jeu", { difficulté: difficultéActuelle });
        });

});

scene ("tuto", () =>{
    
//MUSIQUE    
    const musiqueintro = play("intro", {loop : true});
    onSceneLeave(()=>{
        musiqueintro.stop();
    })

        const tutomonstre = add([
            sprite("tutomonstre"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);

        const tutomonstretexte = add([
            text ("Atan tskolér, un monstre sortit tout droit de...\nton école primaire, t'envoie une tonne\nde lettres à déchiffrer", { size: 60, align: "center", font: "Montserrat" }),
            pos(center().x, 960),
            anchor("center"),
            color(rgb(1, 1, 1)),
        ]);

        const tutoclavier = add([
            sprite("tutoclavier"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);
        tutoclavier.hidden = true;

        const tutoclaviertexte = add([
            text ("Appuie sur la touche correspondante de ton clavier\npour montrer que tu arrive à les lire correctement", { size: 60, align: "center", font: "Montserrat"  }),
            pos(center().x, 960),
            anchor("center"),
            color(rgb(1,1,1)),
        ]);
        tutoclaviertexte.hidden = true;

        const tutolunette = add([
            sprite("tutolunette"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);
        tutolunette.hidden = true;

        const tutolunettetexte = add([
            text ("Mais attention…\nTu auras parfois du mal à détecter certaines lettres.\nPour savoir de quelles lettres il s’agit,\ntu dois te munir de tes super lunettes magiques", { size: 60, align: "center", font: "Montserrat"  }),
            pos(center().x, 900),
            anchor("center"),
            color(rgb(1,1,1)),
        ]);
        tutolunettetexte.hidden = true;

        const tutoflèche = add([
            sprite("tutoflèche"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);
        tutoflèche.hidden = true;

        const tutoflèchetexte = add([
            text ("Chaque lettre double correspond à\nune lentille de lunette que tu peux activer\nen appuyant sur les flèches de ton clavier", { size: 60, align: "center", font: "Montserrat"  }),
            pos(center().x, 960),
            anchor("center"),
            color(rgb(1,1,1)),
        ]);
        tutoflèchetexte.hidden = true;

        const tutoperdu = add([
            sprite("tutoperdu"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);
        tutoperdu.hidden = true;

        const tutoperdutexte = add([
            text ("Déchiffrer toute les lettres d'Atan tskolér fera baisser son\nmoral jusqu'à sa défaite. Mais si tu met trop de temps\nou que tu fais une erreur, c'est toi qui perdra ton moral", { size: 60, align: "center", font: "Montserrat"  }),
            pos(center().x, 940),
            anchor("center"),
            color(rgb(1, 1, 1)),
        ]);
        tutoperdutexte.hidden = true;

        const tutobravo = add([
            sprite("tutobravo"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);
        tutobravo.hidden = true;

        const tutobravotexte = add([
            text ("Ce ne sera pas facile, mais la victoire est\nà portée de main, alors ne te décourage pas !", { size: 60, align: "center", font: "Montserrat"  }),
            pos(center().x, 960),
            anchor("center"),
            color(rgb(1,1,1)),
        ]);
        tutobravotexte.hidden = true;

        let étape = 1;

        onKeyPress(() => {
    if (étape === 1) {

        tutomonstre.hidden = true;
        tutomonstretexte.hidden = true;
        tutoclavier.hidden = false;
        tutoclaviertexte.hidden = false;

        étape = 2;
    } else if (étape === 2) {

        tutoclavier.hidden = true;
        tutoclaviertexte.hidden = true;
        tutolunette.hidden = false;
        tutolunettetexte.hidden = false;

        étape = 3

    } else if (étape === 3) {

        tutolunette.hidden = true;
        tutolunettetexte.hidden = true;
        tutoflèche.hidden = false;
        tutoflèchetexte.hidden = false;

        étape = 4

    } else if (étape === 4) {

        tutoflèche.hidden = true;
        tutoflèchetexte.hidden = true;
        tutoperdu.hidden = false;
        tutoperdutexte.hidden = false;

        étape = 5
    } else if (étape === 5) {

        tutoperdu.hidden = true;
        tutoperdutexte.hidden = true;
        tutobravo.hidden = false;
        tutobravotexte.hidden = false;

        étape = 6
    } else if (étape === 6) {

            go("jeu", { difficulté: "facile" });
    };
    
    });
});

scene("jeu", ({difficulté}) => {

//MUSIQUE    
    musiqueintro.paused = !musiqueintro.paused;
    const musiqueboucle = play("boucle", {loop : true,});
    onSceneLeave(()=>{
        musiqueboucle.stop();
    })

 //IMAGE ET PARAMETRAGE  
        let pause = false;
        const jeu = add([ timer() ]);

    //!image de fond
        add([
            sprite("fondjeu"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);

    //!image titre
        add([
            sprite("titre2"),
            pos(200, 100),
            scale(0.2),
            anchor("center"),
            z(10),
      ]);

    //!image flèche + texte
        const flèchebleu = add([
            sprite("flèchebleu"),
            pos(680, 135),
            anchor("botleft"),
            scale (0.7)
        ]);

        const flècherouge = add([
            sprite("flècherouge"),
            pos(920, 155),
            anchor("botleft"),
            scale (0.65)
        ]);

        const flècheverte = add([
            sprite("flècheverte"),
            pos(1080, 145),
            anchor("botleft"),
            scale (0.65)
        ]);

        const dessinpause = add([
            sprite ("dessinpause"),
            pos (1770, 145),
            anchor("botleft"),
            scale (1)
        ]);

        let dessinAE = add ([
            sprite ("dessinAE"),
            pos (760, 245),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinBD = add ([
            sprite ("dessinBD"),
            pos (930, 245),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinQP = add ([
            sprite ("dessinQP"),
            pos (1100, 278),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinEsc = add ([
            sprite ("dessinEsc"),
            pos (1770, 235),
            anchor("botleft"),
            scale (1)
        ]);

    //!vitesse - niveau de difficulté
        let vitesseboule = 0.3;
        let delayEntreBoules = 1;

        if (difficulté === "facile") {
            vitesseboule = 0.08;
            delayEntreBoules = 1.8;
        } else if (difficulté === "moyen") {
            vitesseboule = 0.17;
            delayEntreBoules = 1.3;
        }else if (difficulté === "difficile") {
            vitesseboule = 0.25;
            delayEntreBoules = 0.9;
        }else if (difficulté === "expert") {
            vitesseboule = 0.4;
            delayEntreBoules = 0.8;
        };


        const alphabet = ["c","f","g","h","i","j","k","l","m","n","o","r","s","t","u","v","w","x","y","z","db","qp","ae"];
        let alphabetIndex = 0;
        const solY = height() - FLOOR_HEIGHT;

 //JOUEUREUSE
    //!hp joueureuse 
        let maxHP = 100
        let HPactuel = maxHP;

    //!joueureuse
        const player = add([
            sprite("heroine"),
            pos(10, 940),
            anchor("botleft"),
            area(),
            scale (0.35),
        ]);

    //!barre de vie
        const scaleDeBase = 0.45
  
    //!barre rouge
        const fondBarrePlayer = add([
            pos(player.pos.x - 20, player.pos.y - 50),
            sprite ("barrerouge"),
            anchor("botleft"),
            scale (scaleDeBase),
            z(10),
        ]);
  
    //!barre verte 
        const barreHPPlayer = add([
            pos(player.pos.x - 20, player.pos.y - 50),
            sprite ("barrevert"),
            anchor("botleft"),
            scale (scaleDeBase),
            z(11),
        ]);
  
        const placebarre = vec2(20,100);

    //!changer taille barre
        player.onUpdate(() => {
            if (pause) return;
            fondBarrePlayer.pos = player.pos.add(vec2(placebarre));
            barreHPPlayer.pos = player.pos.add(vec2(placebarre));

            const pourcentageVie = HPactuel / maxHP;

            barreHPPlayer.scale = vec2(
                scaleDeBase * pourcentageVie,
                scaleDeBase
            );

            if (HPactuel <= 0) {
                player.destroy();
                fondBarrePlayer.destroy();
                barreHPPlayer.destroy();
                go("gameover");
            }
        });

 //MONSTRE
    //!hp monstre 
        let maxHPmonstre = 200
        let HPactuelmonstre = maxHPmonstre;


    //!monstre
        let méchant = add([
            sprite("monstre"),
            pos(1550, 940),
            scale(0.4,0.4),
            anchor("botleft"),
            "chat",
            state("idle", ["idle", "attack"]), 
            area(),
        ]);

    //!barre rouge monstre
        const fondBarreMéchant = add([
          pos(méchant.pos.x - 20, 0.12),
          sprite ("barrerouge"),
          anchor("botleft"),
          scale (scaleDeBase),
          z(10),
        ]);
      
    //!barre verte monstre
        const barreHPMéchant = add([
          pos(méchant.pos.x - 20, 0.12),
          sprite ("barrevert"),
          anchor("botleft"),
          scale (scaleDeBase),
          z(11),
        ]);
      
        const placebarreméchant = vec2(-150,100);
    
    //!changer taille barre monstre
        méchant.onUpdate(() => {
            if (pause) return;
            fondBarreMéchant.pos = méchant.pos.add(vec2(placebarreméchant));
            barreHPMéchant.pos = méchant.pos.add(vec2(placebarreméchant));
    
            const pourcentageViemonstre = HPactuelmonstre / maxHPmonstre;
    
            barreHPMéchant.scale = vec2(
                scaleDeBase * pourcentageViemonstre,
                scaleDeBase
            );
    
            if (HPactuelmonstre <= 0) {
                méchant.destroy();
                fondBarrePlayer.destroy();
                barreHPPlayer.destroy();
                go("bravo");
            }
        });
    
        wait(2, () => {
            méchant.enterState("attack");
        });


 //BULLET        
        const boule = [];
        let couleurDesBullets = rgb(225, 137, 203);

        const bouclebullet = loop(delayEntreBoules, () => {
            if (pause) return;
            if (player.exists() && méchant.state === "attack") {
                const dir = player.pos.sub(méchant.pos).unit();
                let lettrealéatoire = Math.floor(Math.random() * alphabet.length);
                let lettre = alphabet[lettrealéatoire];
                if (modeaccessibilité===true) {
                    lettre = lettre.toUpperCase();
                };
                let y;

    //!courbe bullet 
                let t = 0;

                function courbeQuadratique(t, p0, p1, p2) {
                    return p0.scale((1 - t) * (1 - t))
                        .add(p1.scale(2 * (1 - t) * t))
                        .add(p2.scale(t * t));
                };

                let controlpos = méchant.pos.lerp(player.pos, 0.5).sub(vec2(0, 800));


    //!bullet 
                let bullet = add([
                    pos(méchant.pos.sub(vec2(-100,500))),
                    circle (40),
                    area(),
                    offscreen({ destroy: true }),
                    anchor("center"),
                    color(couleurDesBullets),
                    "bullet",
                    body (),
                    z(90),
                    {
                        update() {
                            if (pause) return;
                            if (t <= 1) {
                                this.pos = courbeQuadratique(t, méchant.pos.sub(vec2(-100, 500)), controlpos, player.pos.sub(vec2(50, 100)));
                                t += dt()* vitesseboule;
                            }
                        },
                    },
                ]);

    //!texte sur bullet
                bullet.add([
                    text(lettre, { size: 50, font: "opendyslexic" }),
                    anchor("center"),
                    pos(0, 5),
                    color(BLACK),
                    z(1),
                ]);
                boule.push({obj: bullet, lettre});
            };  
        });


 //DEGA MONSTRE ET JOUEUREUSE  
    //!appuie sur bonne touche
        onKeyPress((touche) => {
            if (pause) return; 
            let bonnetouche = false;
            for (let i = 0; i < boule.length; i++) {
                const bulletInfo = boule[i];
                if (bulletInfo.lettre.toLowerCase() === touche.toLowerCase()) {
                    destroy(bulletInfo.obj);
                    boule.splice(i, 1);
                    HPactuelmonstre -= 10;
                    bonnetouche = true;
                    break;
                };
            };

    //!appuie sur mauvaise touche
            if (!bonnetouche && !["left", "right", "up", "down", "escape"].includes(touche)) {
                HPactuel -=5;
            };
        });

    //!quand la bullet nous touche
        player.onCollide("bullet", (bullet) => {
            destroy(bullet);
            HPactuel -= 10;
        });

 //FILTRE
    //!filtre vert
        let FiltreVert = false

        onKeyDown("right", () => {
            if (FiltreVert===false) {
                add([
                    rect(width(), height()),
                    color(rgb(137, 225, 163)),
                    z (100),
                    opacity (0.4),
                    "lunnette1"
                ]);
                FiltreVert = true
            };
        });


        onKeyRelease ("right", () => {
            destroyAll ("lunnette1");
            FiltreVert = false
        });

    //!filtre rouge
        let FiltreRouge = false

        onKeyDown("up", () => {
            if (FiltreRouge===false) {
                add([
                    rect(width(), height()),
                    color(rgb(225, 137, 137)),
                    z (100),
                    opacity (0.4),
                    "lunnette2"
                ]);
                FiltreRouge = true
            };
        });

        onKeyRelease ("up", () => {
            destroyAll ("lunnette2");
            FiltreRouge = false
        });

    //!filtre bleu
        let FiltreBleu = false

        onKeyDown("left", () => {
            if (FiltreBleu===false) {
                add([
                    rect(width(), height()),
                    color(rgb(137, 184, 225)),
                    z (100),
                    opacity (0.4),
                    "lunnette3"
                ]);
                FiltreBleu = true
            };
        });

        onKeyRelease ("left", () => {
            destroyAll ("lunnette3");
            FiltreBleu = false
        });


    //!changement lettre quand filtre actif 
        onUpdate(() => {
            if (pause) return;
            for (let i = 0; i < boule.length; i++) {
                const bulletInfo = boule[i];
                const TexteInterieur = bulletInfo.obj.children.find(c => c.text);
                if (!TexteInterieur) continue;
                TexteInterieur.hidden = false;

    //!filtre vert
                if (FiltreVert) {
                    const isLower = bulletInfo.lettre === "qp" || bulletInfo.lettreOriginale === "qp";
                    const isUpper = bulletInfo.lettre === "QP" || bulletInfo.lettreOriginale === "QP";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixVert) {
                        const q = isUpper ? "Q" : "q";
                        const p = isUpper ? "P" : "p";
                        bulletInfo.choixVert = Math.random() < 0.5 ? q : p;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "QP" : "qp";
                    bulletInfo.lettre = bulletInfo.choixVert;
                    TexteInterieur.text = bulletInfo.choixVert;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }

    //!filtre rouge
                if (FiltreRouge) {
                    const isLower = bulletInfo.lettre === "db" || bulletInfo.lettreOriginale === "db";
                    const isUpper = bulletInfo.lettre === "DB" || bulletInfo.lettreOriginale === "DB";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixRouge) {
                        const d = isUpper ? "D" : "d";
                        const b = isUpper ? "B" : "b";
                        bulletInfo.choixRouge = Math.random() < 0.5 ? d : b;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "DB" : "db";
                    bulletInfo.lettre = bulletInfo.choixRouge;
                    TexteInterieur.text = bulletInfo.choixRouge;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }

    //!filtre bleu
                if (FiltreBleu) {
                    const isLower = bulletInfo.lettre === "ae" || bulletInfo.lettreOriginale === "ae";
                    const isUpper = bulletInfo.lettre === "AE" || bulletInfo.lettreOriginale === "AE";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixBleu) {
                        const a = isUpper ? "A" : "a";
                        const e = isUpper ? "E" : "e";
                        bulletInfo.choixBleu = Math.random() < 0.5 ? a : e;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "AE" : "ae";
                    bulletInfo.lettre = bulletInfo.choixBleu;
                    TexteInterieur.text = bulletInfo.choixBleu;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }
    //!remise état d'origine tout filtre
                if (bulletInfo.lettreOriginale) {
                    TexteInterieur.text = bulletInfo.lettreOriginale;
                    bulletInfo.lettre = bulletInfo.lettreOriginale;
                    delete bulletInfo.lettreOriginale;
                }
                delete bulletInfo.choixBleu;
                delete bulletInfo.choixRouge;
                delete bulletInfo.choixVert;
            }
        });

    //!ajout lunette quand filtre actif    
        onUpdate(() => {
            if (FiltreBleu || FiltreRouge || FiltreVert && player.curAnim() !== "heroinelunette") {
                player.use(sprite("heroinelunette"));
            } else if (!FiltreBleu  || FiltreRouge || FiltreVert && player.curAnim() !== "heroine") {
                player.use(sprite("heroine"));
            }
        });

 //PAUSE
        let curTween = null;
    
    //!afficher menu pause
        onKeyPress("escape", () => {
            pause = !pause;
            if (curTween) curTween.cancel();
            curTween = tween(
                pauseMenu.pos,
                pause ? center() : center().add(0, 700),
                1,
                (p) => pauseMenu.pos = p,
                easings.easeOutElastic,
            );
            if (pause) {
                pauseMenu.hidden = false;
            }
            else {
                curTween.onEnd(() => {
                    pauseMenu.hidden = true;
                });
            };
    //!pour que les bullet tombe pas        
            get("bullet").forEach((b) => {
                b.paused = pause;
                if (pause) {
                    b.gravityScale = 0;
                    b.vel.y = 0;
                } else {
                    b.gravityScale = 1;
                };
            });

        });

    //!visuel menu pause
        const pauseMenu = add([
            rect(450, 550),
            color(rgb(255, 253, 143)),
            outline(2 ),
            anchor("center"),
            pos(center().add(0, 700)),
            z (200),
        ]);

    //!texte menu pause
        pauseMenu.add([
            text("besoin d'une\npetite pause ?", { size: 50,  font: "opendyslexic" }),
            pos(0, -180),
            anchor("center"),
            color(BLACK),
        ]);
    
        pauseMenu.add([
            text("appuie sur :\n\nespace = acceuil\nEsc = retour au jeu\nA = mode accessibilité", { size: 35, lineSpacing: 20, font: "opendyslexic" }),
            pos(0, 30),
            anchor("center"),
            color(BLACK),
        ]);

    //!retour accueil
        onKeyPress("space", () =>{
            if (pause) {
                go("accueil")
            };
        });

    //!mode accessibilité
        let modeaccessibilité = false;
        let écritAE = null;
        let écritDB = null;
        let écritQP = null;
        let écritEsc = null;


        onKeyPress("a", () =>{
            if (pause) {
                modeaccessibilité = !modeaccessibilité;

                if (modeaccessibilité) {
                    if (dessinAE) destroy(dessinAE);
                    if (dessinBD) destroy(dessinBD);
                    if (dessinQP) destroy(dessinQP);
                    if (dessinEsc) destroy(dessinEsc);

                    écritAE = add ([
                        sprite ("écritAE"),
                        pos (740, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritDB = add ([
                        sprite ("écritDB"),
                        pos (910, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritQP = add ([
                        sprite ("écritQP"),
                        pos (1080, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritEsc = add ([
                        sprite ("écritEsc"),
                        pos (1760, 235),
                        anchor("botleft"),
                        scale (0.32)
                    ]);
                
                    couleurDesBullets = rgb (255, 255, 255);
                } else {
                    if (écritAE) destroy(écritAE);
                    if (écritDB) destroy(écritDB);
                    if (écritQP) destroy(écritQP);
                    if (écritEsc) destroy(écritEsc);

                    dessinAE = add ([
                        sprite ("dessinAE"),
                        pos (760, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinBD = add ([
                        sprite ("dessinBD"),
                        pos (930, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinQP = add ([
                        sprite ("dessinQP"),
                        pos (1100, 278),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinEsc = add ([
                        sprite ("dessinEsc"),
                        pos (1770, 235),
                        anchor("botleft"),
                        scale (1)
                    ]);

                    couleurDesBullets = rgb(225, 137, 203);
                }
                get("bullet").forEach((b) => {
                    b.color = rgb(255, 255, 255); 
                });
            };
        });

        pauseMenu.hidden = true;
        pauseMenu.paused = true;

}); 

scene("infini", () => {

 //MUSIQUE    
    musiqueintro.paused = !musiqueintro.paused;
    const musiqueboucle = play("boucle", {loop : true,});
    onSceneLeave(()=>{
        musiqueboucle.stop();
    })

 //IMAGE ET PARAMETRAGE  
        let pause = false;
        let score = 0
        const jeu = add([ timer() ]);
        const alphabet = ["c","f","g","h","i","j","k","l","m","n","o","r","s","t","u","v","w","x","y","z","db","qp","ae"];
        let alphabetIndex = 0;
        const solY = height() - FLOOR_HEIGHT;

    //!vitesse 
        let vitesseboule = 0.3;
        let delayEntreBoules = 1;

    //!image de fond
        add([
            sprite("fondjeu"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);

    //!image titre
        add([
            sprite("titre2"),
            pos(200, 100),
            scale(0.2),
            anchor("center"),
            z(10),
      ]);

    //!image flèche + texte
        const flèchebleu = add([
            sprite("flèchebleu"),
            pos(680, 135),
            anchor("botleft"),
            scale (0.7)
        ]);

        const flècherouge = add([
            sprite("flècherouge"),
            pos(920, 155),
            anchor("botleft"),
            scale (0.65)
        ]);

        const flècheverte = add([
            sprite("flècheverte"),
            pos(1080, 145),
            anchor("botleft"),
            scale (0.65)
        ]);

        const dessinpause = add([
            sprite ("dessinpause"),
            pos (1770, 145),
            anchor("botleft"),
            scale (1)
        ]);

        let dessinAE = add ([
            sprite ("dessinAE"),
            pos (760, 245),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinBD = add ([
            sprite ("dessinBD"),
            pos (930, 245),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinQP = add ([
            sprite ("dessinQP"),
            pos (1100, 278),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinEsc = add ([
            sprite ("dessinEsc"),
            pos (1770, 235),
            anchor("botleft"),
            scale (1)
        ]);

 //JOUEUREUSE
    //!joueureuse
        const player = add([
            sprite("heroine"),
            pos(10, 940),
            anchor("botleft"),
            area(),
            scale (0.35),
        ]);

 //MONSTRE
    //!monstre
        let méchant = add([
            sprite("monstre"),
            pos(1550, 940),
            scale(0.4,0.4),
            anchor("botleft"),
            "chat",
            state("idle", ["idle", "attack"]), 
            area(),
        ]);

    wait(2, () => {
        méchant.enterState("attack");
    });

 //BULLET        
        const boule = [];
        let couleurDesBullets = rgb(225, 137, 203);

        const bouclebullet = loop(delayEntreBoules, () => {
            if (pause) return;
            if (player.exists() && méchant.state === "attack") {
                const dir = player.pos.sub(méchant.pos).unit();
                let lettrealéatoire = Math.floor(Math.random() * alphabet.length);
                let lettre = alphabet[lettrealéatoire];
                if (modeaccessibilité===true) {
                    lettre = lettre.toUpperCase();
                };
                let y;

    //!courbe bullet 
                let t = 0;

                function courbeQuadratique(t, p0, p1, p2) {
                    return p0.scale((1 - t) * (1 - t))
                        .add(p1.scale(2 * (1 - t) * t))
                        .add(p2.scale(t * t));
                };

                let controlpos = méchant.pos.lerp(player.pos, 0.5).sub(vec2(0, 800));


    //!bullet 
                let bullet = add([
                    pos(méchant.pos.sub(vec2(-100,500))),
                    circle (40),
                    area(),
                    offscreen({ destroy: true }),
                    anchor("center"),
                    color(couleurDesBullets),
                    "bullet",
                    body (),
                    z(90),
                    {
                        update() {
                            if (pause) return;
                            if (t <= 1) {
                                this.pos = courbeQuadratique(t, méchant.pos.sub(vec2(-100, 500)), controlpos, player.pos.sub(vec2(50, 100)));
                                t += dt()* vitesseboule;
                            }
                        },
                    },
                ]);

    //!texte sur bullet
                bullet.add([
                    text(lettre, { size: 50, font: "opendyslexic" }),
                    anchor("center"),
                    pos(0, 5),
                    color(BLACK),
                    z(1),
                ]);
                boule.push({obj: bullet, lettre});
            };  
        });


 //DEGA MONSTRE ET JOUEUREUSE  
    //!appuie sur bonne touche
        onKeyPress((touche) => {
            if (pause) return; 
            let bonnetouche = false;
            for (let i = 0; i < boule.length; i++) {
                const bulletInfo = boule[i];
                if (bulletInfo.lettre.toLowerCase() === touche.toLowerCase()) {
                    destroy(bulletInfo.obj);
                    boule.splice(i, 1);
                    score++;
                    scoreLabel.text = score;
                    bonnetouche = true;
                    break;
                };
            };

    //!appuie sur mauvaise touche
            if (!bonnetouche && !["left", "right", "up", "down", "escape"].includes(touche)) {
            destroy(player);
            go ("gameoverinfini",  { score_final: score });
        }
    });

    //!quand la bullet nous touche
        player.onCollide("bullet", (bullet) => {
            destroy(bullet);
            destroy(player);
            go("gameoverinfini", { score_final: score });
        });

//TEXTE SCORE
    //!score et texte bas milieu
        const scoreLabel = add([
            text(score, { size: 90}),
            pos(1040, 900),
        ]);
        add([
            text(`score :`, { size: 60}),
            pos(700, 915),
        ])

 //FILTRE
    //!filtre vert
        let FiltreVert = false

        onKeyDown("right", () => {
            if (FiltreVert===false) {
                add([
                    rect(width(), height()),
                    color(rgb(137, 225, 163)),
                    z (100),
                    opacity (0.4),
                    "lunnette1"
                ]);
                FiltreVert = true
            };
        });


        onKeyRelease ("right", () => {
            destroyAll ("lunnette1");
            FiltreVert = false
        });

    //!filtre rouge
        let FiltreRouge = false

        onKeyDown("up", () => {
            if (FiltreRouge===false) {
                add([
                    rect(width(), height()),
                    color(rgb(225, 137, 137)),
                    z (100),
                    opacity (0.4),
                    "lunnette2"
                ]);
                FiltreRouge = true
            };
        });

        onKeyRelease ("up", () => {
            destroyAll ("lunnette2");
            FiltreRouge = false
        });

    //!filtre bleu
        let FiltreBleu = false

        onKeyDown("left", () => {
            if (FiltreBleu===false) {
                add([
                    rect(width(), height()),
                    color(rgb(137, 184, 225)),
                    z (100),
                    opacity (0.4),
                    "lunnette3"
                ]);
                FiltreBleu = true
            };
        });

        onKeyRelease ("left", () => {
            destroyAll ("lunnette3");
            FiltreBleu = false
        });


    //!changement lettre quand filtre actif 
        onUpdate(() => {
            if (pause) return;
            for (let i = 0; i < boule.length; i++) {
                const bulletInfo = boule[i];
                const TexteInterieur = bulletInfo.obj.children.find(c => c.text);
                if (!TexteInterieur) continue;
                TexteInterieur.hidden = false;

    //!filtre vert
                if (FiltreVert) {
                    const isLower = bulletInfo.lettre === "qp" || bulletInfo.lettreOriginale === "qp";
                    const isUpper = bulletInfo.lettre === "QP" || bulletInfo.lettreOriginale === "QP";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixVert) {
                        const q = isUpper ? "Q" : "q";
                        const p = isUpper ? "P" : "p";
                        bulletInfo.choixVert = Math.random() < 0.5 ? q : p;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "QP" : "qp";
                    bulletInfo.lettre = bulletInfo.choixVert;
                    TexteInterieur.text = bulletInfo.choixVert;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }

    //!filtre rouge
                if (FiltreRouge) {
                    const isLower = bulletInfo.lettre === "db" || bulletInfo.lettreOriginale === "db";
                    const isUpper = bulletInfo.lettre === "DB" || bulletInfo.lettreOriginale === "DB";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixRouge) {
                        const d = isUpper ? "D" : "d";
                        const b = isUpper ? "B" : "b";
                        bulletInfo.choixRouge = Math.random() < 0.5 ? d : b;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "DB" : "db";
                    bulletInfo.lettre = bulletInfo.choixRouge;
                    TexteInterieur.text = bulletInfo.choixRouge;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }

    //!filtre bleu
                if (FiltreBleu) {
                    const isLower = bulletInfo.lettre === "ae" || bulletInfo.lettreOriginale === "ae";
                    const isUpper = bulletInfo.lettre === "AE" || bulletInfo.lettreOriginale === "AE";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixBleu) {
                        const a = isUpper ? "A" : "a";
                        const e = isUpper ? "E" : "e";
                        bulletInfo.choixBleu = Math.random() < 0.5 ? a : e;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "AE" : "ae";
                    bulletInfo.lettre = bulletInfo.choixBleu;
                    TexteInterieur.text = bulletInfo.choixBleu;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }
    //!remise état d'origine tout filtre
                if (bulletInfo.lettreOriginale) {
                    TexteInterieur.text = bulletInfo.lettreOriginale;
                    bulletInfo.lettre = bulletInfo.lettreOriginale;
                    delete bulletInfo.lettreOriginale;
                }
                delete bulletInfo.choixBleu;
                delete bulletInfo.choixRouge;
                delete bulletInfo.choixVert;
            }
        });


    //!ajout lunette quand filtre actif    
        onUpdate(() => {
            if (FiltreBleu || FiltreRouge || FiltreVert && player.curAnim() !== "heroinelunette") {
                player.use(sprite("heroinelunette"));
            } else if (!FiltreBleu  || FiltreRouge || FiltreVert && player.curAnim() !== "heroine") {
                player.use(sprite("heroine"));
            }
        });

 //PAUSE
        let curTween = null;
    
    //!afficher menu pause
        onKeyPress("escape", () => {
            pause = !pause;
            if (curTween) curTween.cancel();
            curTween = tween(
                pauseMenu.pos,
                pause ? center() : center().add(0, 700),
                1,
                (p) => pauseMenu.pos = p,
                easings.easeOutElastic,
            );
            if (pause) {
                pauseMenu.hidden = false;
            }
            else {
                curTween.onEnd(() => {
                    pauseMenu.hidden = true;
                });
            };
    //!pour que les bullet tombe pas        
            get("bullet").forEach((b) => {
                b.paused = pause;
                if (pause) {
                    b.gravityScale = 0;
                    b.vel.y = 0;
                } else {
                    b.gravityScale = 1;
                };
            });
 
        });

    //!visuel menu pause
        const pauseMenu = add([
            rect(450, 550),
            color(rgb(255, 253, 143)),
            outline(2 ),
            anchor("center"),
            pos(center().add(0, 700)),
            z (200),
        ]);

    //!texte menu pause
        pauseMenu.add([
            text("besoin d'une\npetite pause ?", { size: 50,  font: "opendyslexic" }),
            pos(0, -180),
            anchor("center"),
            color(BLACK),
        ]);
    
        pauseMenu.add([
            text("appuie sur :\n\nespace = acceuil\nEsc = retour au jeu\nA = mode accessibilité", { size: 35, lineSpacing: 20, font: "opendyslexic" }),
            pos(0, 30),
            anchor("center"),
            color(BLACK),
        ]);

    //!retour accueil
        onKeyPress("space", () =>{
            if (pause) {
                go("accueil")
            };
        });

    //!mode accessibilité
        let modeaccessibilité = false;
        let écritAE = null;
        let écritDB = null;
        let écritQP = null;
        let écritEsc = null;


        onKeyPress("a", () =>{
            if (pause) {
                modeaccessibilité = !modeaccessibilité;

                if (modeaccessibilité) {
                    if (dessinAE) destroy(dessinAE);
                    if (dessinBD) destroy(dessinBD);
                    if (dessinQP) destroy(dessinQP);
                    if (dessinEsc) destroy(dessinEsc);

                    écritAE = add ([
                        sprite ("écritAE"),
                        pos (740, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritDB = add ([
                        sprite ("écritDB"),
                        pos (910, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritQP = add ([
                        sprite ("écritQP"),
                        pos (1080, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritEsc = add ([
                        sprite ("écritEsc"),
                        pos (1760, 235),
                        anchor("botleft"),
                        scale (0.32)
                    ]);
                
                    couleurDesBullets = rgb (255, 255, 255);
                } else {
                    if (écritAE) destroy(écritAE);
                    if (écritDB) destroy(écritDB);
                    if (écritQP) destroy(écritQP);
                    if (écritEsc) destroy(écritEsc);

                    dessinAE = add ([
                        sprite ("dessinAE"),
                        pos (760, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinBD = add ([
                        sprite ("dessinBD"),
                        pos (930, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinQP = add ([
                        sprite ("dessinQP"),
                        pos (1100, 278),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinEsc = add ([
                        sprite ("dessinEsc"),
                        pos (1770, 235),
                        anchor("botleft"),
                        scale (1)
                    ]);

                    couleurDesBullets = rgb(225, 137, 203);
                }
                get("bullet").forEach((b) => {
                    b.color = rgb(255, 255, 255); 
                });
            };
        });

        pauseMenu.hidden = true;
        pauseMenu.paused = true;

});

scene("vitesse", () => {
        
 //MUSIQUE    
    musiqueintro.paused = !musiqueintro.paused;
    const musiqueboucle = play("boucle", {loop : true,});
    onSceneLeave(()=>{
        musiqueboucle.stop();
    })

 //IMAGE ET PARAMETRAGE  
        let pause = false;
        let score = 0
        const jeu = add([ timer() ]);
        const alphabet = ["c","f","g","h","i","j","k","l","m","n","o","r","s","t","u","v","w","x","y","z","db","qp","ae"];
        let alphabetIndex = 0;
        const solY = height() - FLOOR_HEIGHT;

    //!vitesse   
        let delayEntreBoules = 1
        let vitesseCourbe = 0.08;
    
    //!image de fond
        add([
            sprite("fondjeu"),
            pos(0, 0),
            scale(1),
            anchor("topleft"),
            z(-100),
        ]);

    //!image titre
        add([
            sprite("titre2"),
            pos(200, 100),
            scale(0.2),
            anchor("center"),
            z(10),
      ]);

    //!image flèche + texte
        const flèchebleu = add([
            sprite("flèchebleu"),
            pos(680, 135),
            anchor("botleft"),
            scale (0.7)
        ]);

        const flècherouge = add([
            sprite("flècherouge"),
            pos(920, 155),
            anchor("botleft"),
            scale (0.65)
        ]);

        const flècheverte = add([
            sprite("flècheverte"),
            pos(1080, 145),
            anchor("botleft"),
            scale (0.65)
        ]);

        const dessinpause = add([
            sprite ("dessinpause"),
            pos (1770, 145),
            anchor("botleft"),
            scale (1)
        ]);

        let dessinAE = add ([
            sprite ("dessinAE"),
            pos (760, 245),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinBD = add ([
            sprite ("dessinBD"),
            pos (930, 245),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinQP = add ([
            sprite ("dessinQP"),
            pos (1100, 278),
            anchor("botleft"),
            scale (0.3)
        ]);

        let dessinEsc = add ([
            sprite ("dessinEsc"),
            pos (1770, 235),
            anchor("botleft"),
            scale (1)
        ]);

 //JOUEUREUSE
    //!joueureuse
        const player = add([
            sprite("heroine"),
            pos(10, 940),
            anchor("botleft"),
            area(),
            scale (0.35),
        ]);

 //MONSTRE
    //!monstre
        let méchant = add([
            sprite("monstre"),
            pos(1550, 940),
            scale(0.4,0.4),
            anchor("botleft"),
            "chat",
            state("idle", ["idle", "attack"]), 
            area(),
        ]);

    wait(2, () => {
        méchant.enterState("attack");
    });

 //BULLET        
        const boule = [];
        let couleurDesBullets = rgb(225, 137, 203);

        const bouclebullet = loop(delayEntreBoules, () => {
            if (pause) return;
            if (player.exists() && méchant.state === "attack") {
                const dir = player.pos.sub(méchant.pos).unit();
                let lettrealéatoire = Math.floor(Math.random() * alphabet.length);
                let lettre = alphabet[lettrealéatoire];
                if (modeaccessibilité===true) {
                    lettre = lettre.toUpperCase();
                };
                let y;

    //!courbe bullet 
                let t = 0;

                function courbeQuadratique(t, p0, p1, p2) {
                    return p0.scale((1 - t) * (1 - t))
                        .add(p1.scale(2 * (1 - t) * t))
                        .add(p2.scale(t * t));
                };

                let controlpos = méchant.pos.lerp(player.pos, 0.5).sub(vec2(0, 800));


    //!bullet 
                let bullet = add([
                    pos(méchant.pos.sub(vec2(-100,500))),
                    circle (40),
                    area(),
                    offscreen({ destroy: true }),
                    anchor("center"),
                    color(couleurDesBullets),
                    "bullet",
                    body (),
                    z(90),
                    {
                        update() {
                            if (pause) return;
                            if (t <= 1) {
                                this.pos = courbeQuadratique(t, méchant.pos.sub(vec2(-100, 500)), controlpos, player.pos.sub(vec2(50, 100)));
                                t += dt()* vitesseCourbe;
                            }
                        },
                    },
                ]);

    //!texte sur bullet
                bullet.add([
                    text(lettre, { size: 50, font: "opendyslexic" }),
                    anchor("center"),
                    pos(0, 5),
                    color(BLACK),
                    z(1),
                ]);
                boule.push({obj: bullet, lettre});

    //!de plus en plus vite
            if (vitesseCourbe < 0.9) vitesseCourbe += 0.01;
        }
    });


 //DEGA MONSTRE ET JOUEUREUSE  
    //!appuie sur bonne touche
        onKeyPress((touche) => {
            if (pause) return; 
            let bonnetouche = false;
            for (let i = 0; i < boule.length; i++) {
                const bulletInfo = boule[i];
                if (bulletInfo.lettre.toLowerCase() === touche.toLowerCase()) {
                    destroy(bulletInfo.obj);
                    boule.splice(i, 1);
                    score++;
                    scoreLabel.text = score;
                    bonnetouche = true;
                    break;
                };
            };

    //!appuie sur mauvaise touche
            if (!bonnetouche && !["left", "right", "up", "down", "escape"].includes(touche)) {
            destroy(player);
            go ("gameoverinfini",  { score_final: score });
        }
    });

    //!quand la bullet nous touche
        player.onCollide("bullet", (bullet) => {
            destroy(bullet);
            destroy(player);
            go("gameoverinfini", { score_final: score });
        });

//TEXTE SCORE
    //!score et texte 
        const scoreLabel = add([
            text(score, { size: 90}),
            pos(1040, 900),
        ]);
        add([
            text(`score :`, { size: 60}),
            pos(700, 915),
        ])

 //FILTRE
    //!filtre vert
        let FiltreVert = false

        onKeyDown("right", () => {
            if (FiltreVert===false) {
                add([
                    rect(width(), height()),
                    color(rgb(137, 225, 163)),
                    z (100),
                    opacity (0.4),
                    "lunnette1"
                ]);
                FiltreVert = true
            };
        });


        onKeyRelease ("right", () => {
            destroyAll ("lunnette1");
            FiltreVert = false
        });

    //!filtre rouge
        let FiltreRouge = false

        onKeyDown("up", () => {
            if (FiltreRouge===false) {
                add([
                    rect(width(), height()),
                    color(rgb(225, 137, 137)),
                    z (100),
                    opacity (0.4),
                    "lunnette2"
                ]);
                FiltreRouge = true
            };
        });

        onKeyRelease ("up", () => {
            destroyAll ("lunnette2");
            FiltreRouge = false
        });

    //!filtre bleu
        let FiltreBleu = false

        onKeyDown("left", () => {
            if (FiltreBleu===false) {
                add([
                    rect(width(), height()),
                    color(rgb(137, 184, 225)),
                    z (100),
                    opacity (0.4),
                    "lunnette3"
                ]);
                FiltreBleu = true
            };
        });

        onKeyRelease ("left", () => {
            destroyAll ("lunnette3");
            FiltreBleu = false
        });


    //!changement lettre quand filtre actif 
        onUpdate(() => {
            if (pause) return;
            for (let i = 0; i < boule.length; i++) {
                const bulletInfo = boule[i];
                const TexteInterieur = bulletInfo.obj.children.find(c => c.text);
                if (!TexteInterieur) continue;
                TexteInterieur.hidden = false;

    //!filtre vert
                if (FiltreVert) {
                    const isLower = bulletInfo.lettre === "qp" || bulletInfo.lettreOriginale === "qp";
                    const isUpper = bulletInfo.lettre === "QP" || bulletInfo.lettreOriginale === "QP";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixVert) {
                        const q = isUpper ? "Q" : "q";
                        const p = isUpper ? "P" : "p";
                        bulletInfo.choixVert = Math.random() < 0.5 ? q : p;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "QP" : "qp";
                    bulletInfo.lettre = bulletInfo.choixVert;
                    TexteInterieur.text = bulletInfo.choixVert;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }

    //!filtre rouge
                if (FiltreRouge) {
                    const isLower = bulletInfo.lettre === "db" || bulletInfo.lettreOriginale === "db";
                    const isUpper = bulletInfo.lettre === "DB" || bulletInfo.lettreOriginale === "DB";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixRouge) {
                        const d = isUpper ? "D" : "d";
                        const b = isUpper ? "B" : "b";
                        bulletInfo.choixRouge = Math.random() < 0.5 ? d : b;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "DB" : "db";
                    bulletInfo.lettre = bulletInfo.choixRouge;
                    TexteInterieur.text = bulletInfo.choixRouge;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }

    //!filtre bleu
                if (FiltreBleu) {
                    const isLower = bulletInfo.lettre === "ae" || bulletInfo.lettreOriginale === "ae";
                    const isUpper = bulletInfo.lettre === "AE" || bulletInfo.lettreOriginale === "AE";

                if (isLower || isUpper) {
                    if (!bulletInfo.choixBleu) {
                        const a = isUpper ? "A" : "a";
                        const e = isUpper ? "E" : "e";
                        bulletInfo.choixBleu = Math.random() < 0.5 ? a : e;
                    }
                    bulletInfo.lettreOriginale = isUpper ? "AE" : "ae";
                    bulletInfo.lettre = bulletInfo.choixBleu;
                    TexteInterieur.text = bulletInfo.choixBleu;
                    TexteInterieur.hidden = false;
                } else {
                    TexteInterieur.hidden = true;
                };
                continue;
                }
    //!remise état d'origine tout filtre
                if (bulletInfo.lettreOriginale) {
                    TexteInterieur.text = bulletInfo.lettreOriginale;
                    bulletInfo.lettre = bulletInfo.lettreOriginale;
                    delete bulletInfo.lettreOriginale;
                }
                delete bulletInfo.choixBleu;
                delete bulletInfo.choixRouge;
                delete bulletInfo.choixVert;
            }
        });


    //!ajout lunette quand filtre actif    
        onUpdate(() => {
            if (FiltreBleu || FiltreRouge || FiltreVert && player.curAnim() !== "heroinelunette") {
                player.use(sprite("heroinelunette"));
            } else if (!FiltreBleu  || FiltreRouge || FiltreVert && player.curAnim() !== "heroine") {
                player.use(sprite("heroine"));
            }
        });

 //PAUSE
        let curTween = null;
    
    //!afficher menu pause
        onKeyPress("escape", () => {
            pause = !pause;
            if (curTween) curTween.cancel();
            curTween = tween(
                pauseMenu.pos,
                pause ? center() : center().add(0, 700),
                1,
                (p) => pauseMenu.pos = p,
                easings.easeOutElastic,
            );
            if (pause) {
                pauseMenu.hidden = false;
            }
            else {
                curTween.onEnd(() => {
                    pauseMenu.hidden = true;
                });
            };
    //!pour que les bullet tombe pas        
            get("bullet").forEach((b) => {
                b.paused = pause;
                if (pause) {
                    b.gravityScale = 0;
                    b.vel.y = 0;
                } else {
                    b.gravityScale = 1;
                };
            });

        });

    //!visuel menu pause
        const pauseMenu = add([
            rect(450, 550),
            color(rgb(255, 253, 143)),
            outline(2 ),
            anchor("center"),
            pos(center().add(0, 700)),
            z (200),
        ]);

    //!texte menu pause
        pauseMenu.add([
            text("besoin d'une\npetite pause ?", { size: 50,  font: "opendyslexic" }),
            pos(0, -180),
            anchor("center"),
            color(BLACK),
        ]);
    
        pauseMenu.add([
            text("appuie sur :\n\nespace = acceuil\nEsc = retour au jeu\nA = mode accessibilité", { size: 35, lineSpacing: 20, font: "opendyslexic" }),
            pos(0, 30),
            anchor("center"),
            color(BLACK),
        ]);

    //!retour accueil
        onKeyPress("space", () =>{
            if (pause) {
                go("accueil")
            };
        });

    //!mode accessibilité
        let modeaccessibilité = false;
        let écritAE = null;
        let écritDB = null;
        let écritQP = null;
        let écritEsc = null;


        onKeyPress("a", () =>{
            if (pause) {
                modeaccessibilité = !modeaccessibilité;

                if (modeaccessibilité) {
                    if (dessinAE) destroy(dessinAE);
                    if (dessinBD) destroy(dessinBD);
                    if (dessinQP) destroy(dessinQP);
                    if (dessinEsc) destroy(dessinEsc);

                    écritAE = add ([
                        sprite ("écritAE"),
                        pos (740, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritDB = add ([
                        sprite ("écritDB"),
                        pos (910, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritQP = add ([
                        sprite ("écritQP"),
                        pos (1080, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    écritEsc = add ([
                        sprite ("écritEsc"),
                        pos (1760, 235),
                        anchor("botleft"),
                        scale (0.32)
                    ]);
                
                    couleurDesBullets = rgb (255, 255, 255);
                } else {
                    if (écritAE) destroy(écritAE);
                    if (écritDB) destroy(écritDB);
                    if (écritQP) destroy(écritQP);
                    if (écritEsc) destroy(écritEsc);

                    dessinAE = add ([
                        sprite ("dessinAE"),
                        pos (760, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinBD = add ([
                        sprite ("dessinBD"),
                        pos (930, 245),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinQP = add ([
                        sprite ("dessinQP"),
                        pos (1100, 278),
                        anchor("botleft"),
                        scale (0.3)
                    ]);

                    dessinEsc = add ([
                        sprite ("dessinEsc"),
                        pos (1770, 235),
                        anchor("botleft"),
                        scale (1)
                    ]);

                    couleurDesBullets = rgb(225, 137, 203);
                }
                get("bullet").forEach((b) => {
                    b.color = rgb(255, 255, 255); 
                });
            };
        });

        pauseMenu.hidden = true;
        pauseMenu.paused = true;

});


scene("gameover", () => {
        
//MUSIQUE    
    const musiqueintro = play("intro", {loop : true});
    onSceneLeave(()=>{
        musiqueintro.stop();
    })

    const centerX = center().x;
    const centerY = center().y;

      //!image de fond
      add([
        sprite("perdu"),
       // pos(0, 0),
        scale(1),
        anchor("topleft"),
        z(-100),
    ]);

    add([
        text(`GAME OVER`, { size: 140, align: "center",  font: "opendyslexic" }),
        pos(centerX + 340, centerY - 130),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

    add([
        text(`appuie sur espace pour rejouer`, {
            size: 45,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 340, centerY + 50),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

    add([
        text(`appuie sur Esc pour revenir au menu principal`, {
            size: 45,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 340 , centerY + 115),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

    onKeyPress("escape", () => {
        go("accueil");
    });

    onKeyPress("space", () => {
        go("jeu", {difficulté: difficultéActuelle})
    });

});

scene("gameoverinfini", ({ score_final }) => { 
        
//MUSIQUE    
    const musiqueintro = play("intro", {loop : true});
    onSceneLeave(()=>{
        musiqueintro.stop();
    })

    const centerX = center().x;
    const centerY = center().y;

    //!image de fond
      add([
        sprite("perdu"),
       // pos(0, 0),
        scale(1),
        anchor("topleft"),
        z(-100),
    ]);

    
    add([
        text(`GAME OVER`, { size: 140, align: "center",  font: "opendyslexic" }),
        pos(centerX + 380, centerY - 320),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

        add([
        text(`ton score est de :`, { size: 80, align: "center",  font: "opendyslexic" }),
        pos(centerX + 380, centerY - 110),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

    add([
        text(`${score_final}`, { size: 160, align: "center",  font: "opendyslexic" }),
        //outline ({ width: 300, color: rgb(0, 0, 0) }),
        pos(centerX + 380, centerY + 60),  
        anchor("center"),
        color(rgb(255, 94, 0, 1)), 
    ]);

    add([
        text(`appuie sur espace pour rejouer`, {
            size: 45,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 380, centerY + 230),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

    add([
        text(`appuie sur Esc pour revenir au menu principal`, {
            size: 45,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 380 , centerY + 300),
        anchor("center"),
        color(rgb(21, 10, 164, 1)),
    ]);

    onKeyPress("escape", () => {
        go("accueil");
    });

    onKeyPress("space", () => {
        go("infini");
    });
});

scene("bravo", () => {
        
//MUSIQUE    
    const musiqueintro = play("intro", {loop : true});
    onSceneLeave(()=>{
        musiqueintro.stop();
    })

    const centerX = center().x;
    const centerY = center().y;

    
      //!image de fond
      add([
        sprite("bravo"),
       // pos(0, 0),
        scale(1),
        anchor("topleft"),
        z(-100),
    ]);


    add([
        text(`BRAVO !`, {
            size: 200,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 390, centerY - 100),
        anchor("center"),
        color(rgb(202, 76, 9, 1)),
    ]);

    add([
        text(`appuie sur espace pour rejouer`, {
            size: 45,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 380, centerY + 230),
        anchor("center"),
        color(rgb(202, 76, 9, 1)),
    ]);

    add([
        text(`appuie sur Esc pour revenir au menu principal`, {
            size: 45,
            align: "center",
            font: "opendyslexic",
        }),
        pos(centerX + 380 , centerY + 300),
        anchor("center"),
        color(rgb(202, 76, 9, 1)),
    ]);

    onKeyPress("escape", () => {
        go("accueil");
    });

    onKeyPress("space", () => {
        go("jeu", { difficulté: difficultéActuelle });
    });
});


function start() {
    // Start with the "game" scene, with initial parameters
    go("accueil", {
        levelIdx: 0,
        score: 0,
    });
}

start();
