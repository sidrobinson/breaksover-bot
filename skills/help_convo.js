module.exports = function(controller) {

    controller.hears(['help'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
<<<<<<< HEAD
            convo.say('Hey do you need help??');

            convo.ask('', function(response, convo) {
                
                convo.say('Cool, I like ' + response.text + ' too!');

                convo.next();

            });
        });

    });


    controller.hears(['question'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // create a path for when a user says YES
            convo.addMessage({
                    text: 'How wonderful.',
            },'yes_thread');

            // create a path for when a user says NO
            // mark the conversation as unsuccessful at the end
            convo.addMessage({
                text: 'Cheese! It is not for everyone.',
                action: 'stop', // this marks the converation as unsuccessful
            },'no_thread');

            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: 'Sorry I did not understand. Say `yes` or `no`',
                action: 'default',
            },'bad_response');

            // Create a yes/no question in the default thread...
            convo.ask('Do you like cheese?', [
                {
                    pattern:  bot.utterances.yes,
                    callback: function(response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern:  bot.utterances.no,
                    callback: function(response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'Let us eat some!');

                    // and now deliver cheese via tcp/ip...
                }

            });
=======
            
            convo.say('Hey do you need help??\nThe list of commands you can use are:\nadduser, listuser, deleteuser, timerstart, timerstop');
            convo.next();
            
>>>>>>> d30a9b7a362ed6b7009913ae3d93aab9ef9043dd
        });

    });

};
