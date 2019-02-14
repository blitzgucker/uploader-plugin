//html5sortable (https://github.com/lukasoppermann/html5sortable)
$(function () {
	$('.uploader.is-multi.is-sortable').each(function(index) {
		sortable('.sortable')[index].addEventListener('sortupdate', function(e) {
			itemsArray=[];
			e.detail.origin.items.forEach(function(entry) {
				itemsArray.push($(entry).data('id'));
			});
		   $(this).request('onSortupdate', {data: {sortedItems: itemsArray}});
		});
	});
});

sortable('.sortable', {
	itemSerializer: function (item, container) {
		item.parent = '[parentNode]'
		item.node = '[Node]'
		item.html = item.html.replace('<','&lt;')
		return item.sort_order
	},
	containerSerializer: function (container) {
		container.node = '[Node]'
		return container
	}
});