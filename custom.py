from bokeh.core.properties import Instance
from bokeh.models import LayoutDOM, ColumnDataSource
from bokeh.io import show

class Custom(LayoutDOM):
    __javascript__ = "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.0/d3.min.js"
    __css__ = "style.css"
    __implementation__ = 'index.js'
    dataset = Instance(ColumnDataSource)

data = dict({
	'x': [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                 14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                 24, 18, 25, 9, 3 ], 
    'y': [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                 14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ]})

source = ColumnDataSource(data)
show(Custom(dataset=source))


