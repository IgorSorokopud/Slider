var Slider = {

    _arrowForward: '.forward-arrow',
    _arrowBack: '.back-arrow',
    _width: 700,
    _height: 350,
    _idSlider: '#slider',

    set arrowForward(value) {
        if (typeof value == 'string') {
            this._arrowForward = value;
        }
    },

    set arrowBack(value) {
        if (typeof value == 'string') {
            this._arrowBack = value;
        }
    },

    set width(value) {
        if (!isNaN(value)) {
            this._width = value;
        }
    },
    set height(value) {
        if (!isNaN(value)) {
            this._height = value;
        }
    },

    set idSlider(value) {
        if (typeof value == 'string') {
            this._idSlider = value;
            this.setIdSlider(this._idSlider);
        }
    },

    setIdSlider: function () {
        var idSlider = this._idSlider;
        var setWidth = this._width;
        var setHeight = this._height;
        var allLi = idSlider + ' li';
        var wrapperSlider = "#" + $(idSlider).parent().closest('div').attr('id');
        jQuery(wrapperSlider + ' ,' + allLi).css({
            'width': setWidth,
            'height': setHeight
        });
        var numberLi = jQuery(allLi).length;
        var lengthAllSliders = setWidth * numberLi;
        jQuery(idSlider).css({
            'width': lengthAllSliders,
            'height': setHeight,
            'marginLeft': -setWidth
        });
    },

    moveLeft: function () {
        var width = this._width;
        var sliderId = this._idSlider;
        jQuery(sliderId).animate({
            left: +width
        }, 400, function () {
            jQuery(sliderId + ' li:last-child').prependTo(sliderId);
            jQuery(sliderId).css('left', '');
        });
    },

    moveRight: function () {
        var width = this._width;
        var sliderId = this._idSlider;
        jQuery(sliderId).animate({
            right: +width
        }, 400, function () {
            jQuery(sliderId + ' li:first-child').appendTo(sliderId);
            jQuery(sliderId).css('right', '');
        });
    },

    events: function () {
        var self = this;
        $(this._arrowBack).on('click', function () {
            self.moveLeft();
        });
        $(this._arrowForward).on('click', function () {
            self.moveRight();
        });
    },

    init: function () {
        this.events();
    }
}