(function () {
    var text_provider = function(){
        var self = this;

        this.initial_welcome_msg = `💲 Welcome to YOUR_BOT_NAME \n
YOUR_BOT_NAME is an interactive bot that provides you with 3% to 6% passive income daily from your deposit.`;

        this.big_dict = {
            'english': {
                'language_select_complete': 'Your language is now set to English; you can change this any time in the Options menu',
                'welcome_msg': 'Welcome Back',
                'error_msg': 'Whoops, something went wrong! Our developers have been alerted.',

                'main_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '💵 Deposit'}, {text: '💳 Withdraw'}], 
                                [{text: '📈 Statistics'}],
                                [{text: '👥 My Referral Link'}, {text: '⚙️ Options'}],
                                [{text: '⁉️ FAQ'},{text: '✉ Support'}]
                              ]
                            })
                          },

                'main_menu_admin': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '💵 Deposit'}, {text: '💳 Withdraw'}], 
                                [{text: '📈 Statistics'}],
                                [{text: '👥 My Referral Link'}, {text: '⚙️ Options'}],
                                [{text: '⁉️ FAQ'},{text: '✉ Support'}],
                                [{text: '🍀 Admin Menu'}]
                              ]
                            })
                          },

                'admin_menu': {
                          reply_markup: JSON.stringify({
                            keyboard: [
                              [{text: '🍞 Check Wallet Balance'}], 
                              [{text: '🍇 Check Pending Deposits'}],
                              [{text: '🍉 Pending Withdrawal Approvals'}],
                              [{text: '💦 Give Bonus'}],
                              [{text: '🏠 Return to Main Menu'}]
                            ]
                          })
                        },

                'options_text': 'Options:',
                'options_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🔁 Edit Withdraw Address'}],
                                [{text: '🎌 Edit Language'}], 
                                [{text: '🏠 Return to Main Menu'}]
                              ],
                            })
                          },
                'return_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🏠 Return to Main Menu'}]
                              ]
                            })
                          },

                'deposit_text': 'Your deposit address is',
                'deposit_initial_text': 'Minimum deposit is 0.02 btc. Please send your coins to the following address',
                'deposit_text_rest': 'Your investment plan will be started after 3 network confirmations.',
                'deposit_confirmed_text': 'We received your deposit of ',
                'deposit_confirmed_text_rest': ' btc, you will start earning interest after 24 hours.',

                'bonus_text': 'You\'ve earned a bonus of ',
                'bonus_text_rest': ' btc\nbe sure to thank @',

                'withdrawal_addr_text': 'Reply to this message with your btc address to set your withdrawal address',
                'withdrawal_addr_error_text': 'Sorry, that\'s not a valid btc address\n Try again, or click /back to cancel',
                'withdrawal_addr_success_text': 'Thanks, your withdrawal address has been set successfully',

                'withdrawal_error_text': 'Your current balance is not enough to withdraw. The minimum needed is 0.02 btc\nYou have: ',
                'withdrawal_error_addr_text': 'You need to set an address before you can withdraw',

                'withdrawal_text': 'Your current balance available to withdraw is ',
                'withdrawal_text_addr_check': 'If the above address is correct',
                'withdrawal_text_rest': '\nReply to this message with the amount you wish to withdraw or type "all"\n or click /back to cancel',

                'withdrawal_err_text': 'You don\'t have enough funds! Try again, or go /back',
                'withdrawal_succ_text': 'Your request to withdraw ',
                'withdrawal_succ_text_rest': ' btc is processing',

                'withdrawal_approved_text': '💰 Your withdrawal request for ',
                'withdrawal_approved_text_rest': ' btc was successful 💰\n',

                'referral_msg_text': 'Your friend has invited you to join YOUR_BOT_NAME, click the link below to get started\n',

                'stats_text_1':       'Account Balance: ',
                'stats_text_2': ' btc\nTotal Invested:  ',
                'stats_text_3': ' btc\nTotal Profit:    ',
                'stats_text_4': ' btc',

                'referral_stats_text_1': 'Your total referrals: ',
                'referral_stats_text_2': '\nActive referrals: ',

                'faq_text': `Frequently Asked Questions:
1. What is YOUR_BOT_NAME?
YOUR_BOT_NAME is an interactive bot that provides you with 3% to 6% of passive income daily. You earn profits with regards to the percentage stipulated within that period of time. Our minimum deposit is 0.02 btc and we offer lots of bonuses every 3 days with amazing rewards.

2. How does YOUR_BOT_NAME work?
Our bot analyzes the best option to invest your bitcoin, allowing us to profit. This profit is accumulated and distributed every 24 hours after you've made your deposit. 

3. Can I deposit more than once?
Yes, you can deposit more than once.

4. How can I withdraw my profit?
Kindly click on the Withdraw button from the main menu to make your withdrawal. Minimum withdrawal is 0.02 btc.

5. How can I earn more money?
You can earn more money by referring your family and friends. Each referral will earn you a commission in three levels 11%-5%-1%.

6. How can I participate in bonuses?
If you have an active investment of 0.5 btc or more you will automatically be enrolled in our raffle. Winners are chosen every 3 days and will get up to a 0.5 btc bonus.

7. What if I experience problems?
Contact someone listed under the support button`,

                'faq_menu': {
                            parse_mode: 'Markdown',
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '✉ Support'}],
                                [{text: '🏠 Return to Main Menu'}]
                              ]
                            })
                          },

                'support_text': `Be always up to date! My Telegram news and info channel is here:
https://t.me/YOUR_BOT_NAMEBotNews

If you have a problem, kindly join our group chat:
https://t.me/CommunityYOUR_BOT_NAMEBot_ENG

Or contact one of the support below:
    @YOUR_BOT_NAME_support1
    @YOUR_BOT_NAME_support2

Or email us at:
    your_support_email`,
                'referral_text': `Earn a Referral Bonus for every user that you recruit! Here's how it works:

As our thanks to you, you will earn 11% of their initial deposit
Plus, any user that they refer, will earn you 5% of their initial deposit
And any user referred by a user you refer, will earn you 1% of their initial deposit

All you have to do is forward the following message with your unique referral link`,
                'referral_prelauncher_text': `Earn a Referral Bonus for every user that you recruit! Here's how it works:

As our thanks to you, you will earn 22% of their initial deposit
Plus, any user that they refer, will earn you 10% of their initial deposit
And any user referred by a user you refer, will earn you 2% of their initial deposit

All you have to do is forward the following message with your unique referral link`,


            },
            'french': {

'language_select_complete': 'Votre langue est maintenant configurée en Français, vous pouvez la modifier n\'importe quand dans le menu Options',
'welcome_msg': 'Nous saluons le retour',
'error_msg': 'Whoops, quelque chose ne s\'est pas déroulé, nos développeurs ont été alerté et répareront ce qui se passera!',

            'main_menu': {
             reply_markup: JSON.stringify({
              keyboard: [
                    [{text: '💵 Dépôt'}, {text: '💳 Retirer'}], 
                    [{text: '📈 Statistiques'}],
                    [{text: '👥 Mon lien de référence'}, {text: '⚙️ Les options'}],
                    [{text: '⁉️ FAQ'},{text: '✉ soutien'}] 
                    ]
                    })},

                        'options_text': 'Options:',
                'options_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🔁 Modifier retirer l\'adresse'}],
                                [{text: '🎌 Modifier la langue'}], 
                                [{text: '🏠 Retour au menu principal'}]
                              ],
                            })
                          },
                'return_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🏠 Retour au menu principal'}]
                              ]
                            })
                          },

               'deposit_text': 'Votre adresse de dépôt est',
                'deposit_initial_text': 'Le dépôt minimum est de 0.02 btc, veuillez envoyer vos pièces à l\'adresse suivante',
                'deposit_confirmed_text': 'Nous avons reçu votre dépôt de ',
                'deposit_confirmed_text_rest': ' btc, vous commencerez à vous intéresser après 24 heures.',

                'bonus_text': 'Vous avez gagné un bonus de ',
                'bonus_text_rest': ' btc\nAssurez-vous de remercier @',

                'withdrawal_addr_text': 'Répondez à ce message avec votre adresse btc pour définir votre adresse de retrait',
                'withdrawal_addr_error_text': 'Désolé, ce n\'est pas une adresse btc valide\nRéessayez ou cliquez sur /back',
                'withdrawal_addr_success_text': 'Merci, votre adresse de retrait a été réglée avec succès',

                 'withdrawal_error_text': 'Votre solde actuel n\'est pas suffisant pour vous retirer. Le minimum requis est de 0.02 btc\nTu as: ',
                'withdrawal_error_addr_text': 'Vous devez définir une adresse avant de pouvoir retirer',

                'withdrawal_text': 'Votre solde actuel disponible pour le retrait est ',
                'withdrawal_text_addr_check': 'Si l\'adresse ci-dessus est correcte',
                'withdrawal_text_rest': '\nRépondez à ce message avec le montant que vous souhaitez retirer ou taper "tout"\n ou cliquez sur /back',

                'withdrawal_succ_text': 'Votre demande de retrait ',
                'withdrawal_succ_text_rest': 'btc est traitement',

                'withdrawal_approved_text': '💰 Votre demande de retrait pour',
                'withdrawal_approved_text_rest': ' btc était un succès 💰',

                'withdrawal_err_text': 'Vous n\'avez pas assez de fonds! Réessayer, ou aller /back',

                'referral_msg_text': 'Votre ami vous a invité à rejoindre YOUR_BOT_NAME, cliquez sur le lien ci-dessous pour commencer\n',

                'stats_text_1':       'Solde du compte: ',
                'stats_text_2': ' btc\nTotal Investissement:  ',
                'stats_text_3': ' btc\nTotal Bénéfice:    ',
                'stats_text_4': ' btc',

                'referral_stats_text_1': 'Vos références totales: ',
                'referral_stats_text_2': '\nRenvois actifs: ',

                'faq_text': `Questions fréquemment posées:
1. Quel est YOUR_BOT_NAME?
YOUR_BOT_NAME Est un robot interactif qui vous fournit quotidiennement 3% à 6% du revenu passif. Vous gagnez des bénéfices en ce qui concerne le pourcentage stipulé dans cette période. Notre dépôt minimum est placé à 0.02 btc et nous offrons beaucoup de bonus tous les 3 jours avec des récompenses incroyables.

2.Comment travaille YOUR_BOT_NAME?
Notre bot analyse la meilleure option pour investir votre bitcoin, ce qui nous permet de réaliser des profits. Ce bénéfice est accumulé et distribué toutes les 24 heures après avoir effectué votre dépôt. 

3. Puis-je déposer plus d'une fois?
Oui, vous pouvez avoir plus d'un dépôt.

4. Comment puis-je retirer mon bénéfice?
Veuillez cliquer sur le bouton de retrait du menu principal pour effectuer votre retrait. Le retrait minimum est de 0.02 btc.

5. Comment puis-je gagner plus d'argent?
Vous pouvez gagner plus d'argent si vous vous référez à votre famille et à vos amis. Chaque recommandation vous procurera une commission à trois niveaux 11% -5% -1%.

6. Comment puis-je participer aux bonus?
Si vous avez un investissement actif de 0.5 btc ou plus, vous serez automatiquement inscrit au tirage au sort. Les gagnants sont choisis tous les 3 jours et recevront un bonus de 0.5 btc.

7. Et si j'éprouve des problèmes?
Contactez quelqu'un listé sous le bouton Support`,


                'faq_menu': {
                            parse_mode: 'Markdown',
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '✉ Soutien'}],
                                [{text: '🏠 Retour au menu principal'}]
                              ]
                            })
                          },

 'support_text': `Soyez toujours à jour! Ma chaîne d'actualités et d'information Telegram est ici:
https://t.me/YOUR_BOT_NAMEBotNews

si vous avez un problème, veuillez joindre notre groupe chat:
https://t.me/CommunityYOUR_BOT_NAMEBot_ENG

Ou Contactez l'un des supports ci-dessous:
    @YOUR_BOT_NAME_support1
    @YOUR_BOT_NAME_support2

Ou Envoyez-nous un courriel à:
    YOUR_BOT_NAMEbot@gmail.com`,
                'referral_text': `Gagnez un bonus de recommandation pour chaque utilisateur que vous recrutez! Voici comment cela fonctionne:

Comme nous vous remercions, vous gagnerez 11% de leur dépôt initial
De plus, tous les utilisateurs qu'ils renvoient, vous gagnera 5% de leur dépôt initial
Et tout utilisateur référé par un utilisateur que vous renvoyez, vous gagnera 1% de son dépôt initial

Tout ce que vous devez faire est de transmettre le message suivant avec votre lien de référence unique`,
                'referral_prelauncher_text': `Gagnez un bonus de recommandation pour chaque utilisateur que vous recrutez! Voici comment cela fonctionne:

Comme nous vous remercions, vous gagnerez 22% de leur dépôt initial
De plus, tous les utilisateurs qu'ils renvoient, vous gagnera 10% de leur dépôt initial
Et tout utilisateur référé par un utilisateur que vous renvoyez, vous gagnera 2% de son dépôt initial

Tout ce que vous devez faire est de transmettre le message suivant avec votre lien de référence unique`,
          
            },
            'german': { 'language_select_complete': 'Ihre Sprache ist jetzt auf Deutsch eingestellt; das können Sie in den Optionensmenü ändern',
                'welcome_msg': 'Wilkommen Zurück',
                'error_msg': 'Hoppla!  Etwas ist schief gelaufen! Unsere Entwickleren wurden benachrightigt.',

                'main_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '💵 Einzahlen'}, {text: '💳 Abheben'}], 
                                [{text: '📈 Statistiken'}],
                                [{text: '👥 Meine Verweis Link'}, {text: '⚙️ Optionen'}],
                                [{text: '⁉️ FAQ'},{text: '✉ Support'}]
                              ]
                            })
                          },

                'main_menu_admin': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '💵 Einzahlen'}, {text: '💳 Abheben'}], 
                                [{text: '📈 Statistiken'}],
                                [{text: '👥 Meine Verweis Link'}, {text: '⚙️ Optionen'}],
                                [{text: '⁉️ FAQ'},{text: '✉ Support'}],
                                [{text: '🍀 Admin Menü'}]
                              ]
                            })
                          },

                'admin_menu': {
                          reply_markup: JSON.stringify({
                            keyboard: [
                              [{text: '🍞 Kontostand Checken'}], 
                              [{text: '🍇 Unerledigt Anzahlungen'}],
                              [{text: '🍉 Anhängige Rücknahmegenehmigungen'}],
                              [{text: '🏠 Zuruck zum HauptMenü'}]
                            ]
                          })
                        },

                'options_text': 'Optionen:',
                'options_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🔁 Abhebungsadresse Ändern'}],
                                [{text: '🎌 Sprache Ändern'}], 
                                [{text: '🏠 Zuruck zum Hauptmenü'}]
                              ],
                            })
                          },
                'return_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🏠 Zuruck zum Hauptmenü'}]
                              ]
                            })
                          },

                'deposit_text': 'Ihre Einzahlungsadresse ist',
                'deposit_initial_text': 'Mindesteinzahlung is 0,02 BTC; bitte senden Sie Ihre Münzen an die folgende Adresse',
                'deposit_confirmed_text': 'Wir haben deine Anzahlung bekommen von ',
                'deposit_confirmed_text_rest': ' btc, Sie werden nach 24 Stunden Interesse verdienen',

                'bonus_text': 'Sie haben einen Bonus verdient von ',
                'bonus_text_rest': ' btc\n Sei danke zu danken @',

                'withdrawal_addr_text': 'address',
                'withdrawal_addr_error_text': 'Entschuldigung, das ist nicht eine gültige Adresse\n Versuchen sie es erneut oder clicken sie /back um abzubrechen',
                'withdrawal_addr_success_text': 'Danke, deine Abhebungsadresse wurde erfolgreich gesetzt',

                'withdrawal_error_text': 'Ihr aktuelles Gleichgewicht ist nicht genug um sich zurückzuziehen. Das erforderliche Minimum ist 0,02 btc.\nSie haben: ',
                'withdrawal_error_addr_text': 'Sie mussen eine Adresse setzen bevor sie sich zurückziehen kann',

                'withdrawal_text': 'Ihre aktueller Restbetrag lieferbar zum zuruckziehen ist ',
                'withdrawal_text_addr_check': 'Wenn die obige Adresse korrekt ist ',
                'withdrawal_text_rest': '\nBeantworten Sie diese Nachricht mit dem Betrag den Sie zurückziehen möchten, oder geben Sie "alle" ein\noder klicken Sie auf /back um abzubrechen',

                'withdrawal_succ_text': 'Ihr Antrag auf Rücktritt wurde an den Admin zur Genehmigung geschickt.  Danke!',
                'withdrawal_err_text': 'Sie haben nicht genugen Geld ubrich!  Versuchen Sie es noch einmal, oder gehen Sie zurück',
                
                'withdrawal_approved_text': '💰 Ihre Abhebungsanfrage für ',
                'withdrawal_approved_text_rest': ' btc war erfolgreich 💰\n',

                'referral_msg_text': 'Dein Freund hat dich eingeladen, sich YOUR_BOT_NAME anzuschließen. Bitte klicken Sie auf den Link unten um loszulegen.\n ',

                'stats_text_1':       'Kontostand: ',
                'stats_text_2': ' btc\nInsgesamt investiert:  ',
                'stats_text_3': ' btc\nGesamtgewinn:    ',
                'stats_text_4': ' btc',

                'referral_stats_text_1': 'Ihre Gesamtverweise: ',
                'referral_stats_text_2': '\nAktive Verweise: ',

                'faq_text': `Häufig gestellte Fragen:
1. Was ist YOUR_BOT_NAME?
YOUR_BOT_NAME ist ein interaktiver Bot, der Ihnen 3% bis 6% des passiven Einkommens täglich zur Verfügung stellt. Sie verdienen Gewinne in Bezug auf den in dieser Zeit festgelegten Prozentsatz. Unsere Mindesteinzahlung ist bei 0,02 btc und wir bieten viele Boni alle 3 Tage mit erstaunlichen Belohnungen.

2. Wie funktioniert YOUR_BOT_NAME?
Unser Bot analysiert die beste Optionen um Ihre Bitcoin zu investeiren.  Dieser Gewinn wird gesammelt und verteilt alle 24 Studen, nachdem Sie Ihre Geld hinterlegt hast.

3. Darf ich mehr als einmal ablegen?
Ja, sie durfen mehr als einmal ablegen.

4. Wie kann ich meinen Gewinn zurückziehen? 
Bitte klicken sie auf den Auszugstaste aus dem Hauptmenü, um einen Rückzug zu machen. Der Mindestabzug beträgt 0,02 btc.

5. Wie kann ich mehr Geld verdeinen? 
Sie können mehr Geld verdienen, wenn Sie Ihre Familie und Freunde verweisen. Jede Überweisung wird 11% -5% -1% verdienen.
    
6. Wie kann ich an Boni teilnehmen? 
Wenn Sie eine aktive Investition von 0,5 btc oder mehr haben, werden Sie automatisch in unsere Verlosung eingeschrieben. Die Gewinner werden alle 3 Tage gewählt und werden bis zu einem 0,5-btc-Bonus aufstehen.

7. Was tuhe ich wenn ich Probleme erlebe? 
Kontaktieren Sie jemanden unter dem Support-Button`,

                'faq_menu': {
                            parse_mode: 'Markdown',
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '✉ Support'}],
                                [{text: '🏠 Zuruck zum Hauptmenü'}]
                              ]
                            })
                          },

                'support_text': `Sie immer auf dem Laufenden!  Mein Telegram News und Info Channel ist heir:
https://t.me/YOUR_BOT_NAMEBotNews

Wenn Sie ein Problem haben, melden Sie sich bitte unserem Gruppenchat an:
https://t.me/CommunityYOUR_BOT_NAMEBot_ENG


Oder kontaktieren Sie uns unter:
    @YOUR_BOT_NAME_support1
    @YOUR_BOT_NAME_support2

Oder emailen sie uns unter:
    YOUR_BOT_NAMEbot@gmail.com`,
                'referral_text': `Verdienen Sie einen Empfehlungsbonus für jeden Benutzer, den Sie rekrutieren! So funktioniert das:

Als unser Dank an Sie, verdienen Sie 11% ihrer ursprünglichen Ablagerung
Plus, jeder Benutzer, den sie verweisen, verdienen Sie 5% ihrer ursprünglichen Einzahlung
Und jeder Benutzer der von einem Benutzer, den Sie verweisen, verwiesen wird, erhält Ihnen 1% ihrer ursprünglichen Einzahlung

Alles, was Sie tun müssen, ist die folgende Nachricht mit Ihrem einzigartigen Verweis Link forwarden`,
                'referral_prelauncher_text': `Verdienen Sie einen Empfehlungsbonus für jeden Benutzer, den Sie rekrutieren! So funktioniert das:

Als unser Dank an Sie, verdienen Sie 11% ihrer ursprünglichen Ablagerung
Plus, jeder Benutzer, den sie verweisen, verdienen Sie 5% ihrer ursprünglichen Einzahlung
Und jeder Benutzer der von einem Benutzer, den Sie verweisen, verwiesen wird, erhält Ihnen 1% ihrer ursprünglichen Einzahlung

Alles, was Sie tun müssen, ist die folgende Nachricht mit Ihrem einzigartigen Verweis Link forwarden`,

},
            'russian': {

                'language_select_complete': 'Ваш язык установлен на Русский, вы можете изменить его в любое время в меню «Параметры»',
                'welcome_msg': 'Добро Пожаловать',

                'main_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '💵 Депонировать'}, {text: '💳 Изымать'}], 
                                [{text: '📈 Статистика'}],
                                [{text: '👥 Моя Реферальная Ссылка'}, {text: '⚙️ Параметры'}],
                                [{text: '⁉️ FAQ'},{text: '✉ Помощь'}]
                              ]
                            })
                          },


                'options_text': 'Параметры:',
                'options_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🔁 Изменить Адрес Вывода'}],
                                [{text: '🎌 Изменить Язык'}], 
                                [{text: '🏠 Вернуться в Главное Меню'}]
                              ],
                            })
                          },
                'return_menu': {
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '🏠 Вернуться в Главное Меню'}]
                              ]
                            })
                          },

                'deposit_text': 'Ваш депозитный адрес',
                'deposit_initial_text': 'Минимальный депозит 0,02 btc, пожалуйста отправьте ваши монеты по следующему адресу',
                'deposit_confirmed_text': 'Мы получили ваш депозит в размере ',
                'deposit_confirmed_text_rest': ' btc, вы начнете зарабатывать проценты через 24 часа.',

                'bonus_text': 'Вы получили бонус ',
                'bonus_text_rest': ' btc\nне забудьте поблагодарить @',

                'withdrawal_addr_text': 'Ответьте на это сообщение с вашим адресом, чтобы установить адрес выхода',
                'withdrawal_addr_error_text': 'Извините, это не действительный адрес\n Попробуйте еще раз или нажмите /back  чтобы отменить',
                'withdrawal_addr_success_text': 'Спасибо, ваш адрес отзыва успешно установлен',

                'withdrawal_error_text': 'Ваш текущий баланс слишком мал, чтобы извлекать. Необходимый минимум 0,02 btc \n Вы имеете: ',
                'withdrawal_error_addr_text': 'Вам нужно установить адрес, прежде чем вы сможете извлекать',

                'withdrawal_text': 'Ваш текущий баланс, доступный для снятия средств ',
                'withdrawal_text_addr_check': 'Если вышеуказанный адрес верен',
                'withdrawal_text_rest': '\nОтветьте на это сообщение с суммой, которую вы хотите снять или введите "all"\n  или нажмите /back  чтобы отменить',

                'withdrawal_err_text': 'У тебя недостаточно средств! Повторите попытку или /back',
                'withdrawal_succ_text': 'Ваш запрос отозвать ',
                'withdrawal_succ_text_rest': ' btc идет полным ходом',

                'withdrawal_approved_text': '💰 Ваш запрос на вывод средств на ',
                'withdrawal_approved_text_rest': ' btc был успешным 💰\n',

                'referral_msg_text': 'Ваш друг пригласил вас присоединиться к боту YOUR_BOT_NAME, для того чтобы начать, нажмите на ссылку ниже\n',

                'stats_text_1':       'Баланс:   ',
                'stats_text_2': ' btc\nВложение: ',
                'stats_text_3': ' btc\nДоход:    ',
                'stats_text_4': ' btc',

                'referral_stats_text_1': 'Количество рефералов: ',
                'referral_stats_text_2': '\nКоличество активных рефералов: ',

                'faq_text': `Часто Задаваемые Вопросы:
1. Что такое YOUR_BOT_NAME?
YOUR_BOT_NAME Является интерактивным ботом, который ежедневно обеспечивает от 3% до 6% пассивного дохода. Вы получаете прибыль в отношении процента, установленного в течение этого периода времени. Наш минимальный депозит размещается на уровне 0,02 btc и мы предлагаем много бонусов каждые 3 дня с удивительными наградами.

2. Как работает YOUR_BOT_NAME?
Наш бот анализирует лучший вариант для инвестирования вашего биткойна, который позволяет нам получать прибыль. Эта прибыль накапливается и распределяется каждые 24 часа после внесения депозита.

3. Могу ли я внести депозит больше одного раза?
Да, не в чем себе не отказывайте 

4. Как я могу достать свою прибыль?
Нажмите на кнопку «Изымать» в главном меню, чтобы сделать вывод

5. Как я могу заработать больше денег?
Вы можете заработать больше денег, если вы обратитесь к своей семье и друзьям. Каждый реферал заработает комиссию в трех уровнях 11% -5% -1%.

6. Как я могу участвовать в бонусах?
Если у вас есть активные инвестиции в размере 0,5 btc и более, вы автоматически будете зачислены в нашу лотерею. Победители выбираются каждые 3 дня и получат бонус в 0,5 btc.

7. Что делать, если у меня есть проблемы?
Нажмите кнопку «Помощь»`,

                'faq_menu': {
                            parse_mode: 'Markdown',
                            reply_markup: JSON.stringify({
                              keyboard: [
                                [{text: '✉ Помощь'}],
                                [{text: '🏠 Вернуться в Главное Меню'}]
                              ]
                            })
                          },

                'support_text': `Будьте всегда в курсе! Мой новостной и информационный канал находится здесь:
https://t.me/YOUR_BOT_NAMEBotNews

Если у вас есть проблемы, присоединяйтесь к нашему групповому чату:
https://t.me/CommunityYOUR_BOT_NAMEBot_ENG

Или обратитесь к одной из нижеуказанных:
    @YOUR_BOT_NAME_support1
    @YOUR_BOT_NAME_support2

Или напишите нам по электронной почте:
    YOUR_BOT_NAMEbot@gmail.com`,
                'referral_text': `Зарабатывайте реферальный бонус для каждого пользователя, которого вы набираете! вот как это работает:

Поскольку мы благодарим вас, вы заработаете 11% от первоначального депозита
Кроме того, любой пользователь, которого они называют, заработает вам 5% от первоначального депозита
И любой пользователь, на который ссылается пользователь, которого вы называете, заработает вам 1% от первоначального депозита

Все, что вам нужно сделать, это отправить следующее сообщение с вашей уникальной реферальной ссылкой`,
'referral_prelauncher_text': `Зарабатывайте реферальный бонус для каждого пользователя, которого вы набираете! вот как это работает:

Поскольку мы благодарим вас, вы заработаете 22% от первоначального депозита
Кроме того, любой пользователь, которого они называют, заработает вам 10% от первоначального депозита
И любой пользователь, на который ссылается пользователь, которого вы называете, заработает вам 2% от первоначального депозита

Все, что вам нужно сделать, это отправить следующее сообщение с вашей уникальной реферальной ссылкой`,

            }
        };

        this.get_text = function(lang, key) {
            if (!(lang in self.big_dict)){
                lang = 'english';
            } else if (!(key in self.big_dict[lang])){
                lang = 'english';
            }
            if (key in self.big_dict[lang]){
                return self.big_dict[lang][key];
            } else {
                if (key.indexOf('menu') >= 0){
                    return self.big_dict[lang]['main_menu']
                } else {
                    return 'oops';
                }
            }
        }
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = {msg_dict : text_provider};
    }
}());
