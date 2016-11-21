'use strict';

$(function() {
    // 指定されたタブを選択状態にする
    function selectTab($tabRoot, selectedIndex) {
        var ensure = function(index) {
            this.dataset.selected = index === selectedIndex;
        };
        $tabRoot.find('[class$="__tab"]').each(ensure);
        $tabRoot.find('[class$="__panel"]').each(ensure);
        $tabRoot.attr('data-selected-index', selectedIndex);
    }

    // タブを初期化する
    $('[data-app="tab"]').each(function() {
        selectTab($(this), this.dataset.selectedIndex - 0);
    });

    // クリックされたタブを選択する
    $('[data-app="tab"]').on('click', '[class$="__tab"]', function() {
        var $this = $(this);
        var $root = $this.closest('[data-app="tab"]');
        var index = $this.parent().children().index(this);
        selectTab($root, index);
    });
});
