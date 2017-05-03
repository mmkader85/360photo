/**
 * Created by muhammed on 2/5/17.
 */
/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
    schema: {
        on: {type: 'string'},
        target: {type: 'selector'},
        src: {type: 'string'},
        dur: {type: 'number', default: 300}
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        this.setupFadeAnimation();

        el.addEventListener(data.on, function () {
            // Fade out image.
            data.target.emit('set-image-fade');
            // Wait for fade to complete.
            setTimeout(function () {
                // Set thumbs relative to the target
                var target = data.src.split('#').pop();
                var thumbProperties = {
                    src: {
                        pantry: {
                            reception: [
                                ['visible', false]
                            ]
                        }
                    }
                };

                if (typeof thumbProperties.src[target] !== 'undefined') {
                    for (var relativeElementId in thumbProperties.src[target]) {
                        var relativeElement = document.querySelector('#'+relativeElementId+'-thumb');
                        console.log(relativeElement);
                        for (var i in thumbProperties.src[target][relativeElementId]) {
                            var relativeElementProperty = thumbProperties.src[target][relativeElementId][i];
                            if (relativeElementProperty.length == 2) {
                                console.log('Setting attribute ' + relativeElementProperty[0] + ', ' + relativeElementProperty[1] + ' to ' + relativeElementId);
                                relativeElement.setAttribute(relativeElementProperty[0], relativeElementProperty[1]);
                            } else if (relativeElementProperty.length == 3) {
                                console.log('Setting attribute ' + relativeElementProperty[0] + ', ' + relativeElementProperty[1] + ', ' + relativeElementProperty[2] + ' to ' + relativeElementId);
                                relativeElement.setAttribute(relativeElementProperty[0], relativeElementProperty[1], relativeElementProperty[2]);
                            }
                        }
                    }
                }
                // Set image.
                data.target.setAttribute('material', 'src', data.src);
            }, data.dur);
        });
    },

    /**
     * Setup fade-in + fade-out.
     */
    setupFadeAnimation: function () {
        var data = this.data;
        var targetEl = this.data.target;

        // Only set up once.
        if (targetEl.dataset.setImageFadeSetup) { return; }
        targetEl.dataset.setImageFadeSetup = true;

        // Create animation.
        targetEl.setAttribute('animation__fade', {
            property: 'material.color',
            startEvents: 'set-image-fade',
            dir: 'alternate',
            dur: data.dur,
            from: '#FFF',
            to: '#000'
        });
    },
});
