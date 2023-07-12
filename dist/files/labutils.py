from sympy import *
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
from IPython.display import Markdown, display
mpl.font_manager.fontManager.addfont("fonts/LeelawUI.ttf")
mpl.rc('font', family="Leelawadee UI")
plt.style.use('fonts/phy1.mplstyle')
np.set_printoptions(precision=1)
np.set_printoptions(floatmode="fixed")

def md(str):
    return Markdown(str)
