from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api, win32con

time.sleep(2)

def click(x,y):
	win32api.SetCursorPos((x,y))
	win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
	win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)


running = False  # Initially paused

while True:
	if keyboard.is_pressed('p'):
		running = not running
		while keyboard.is_pressed('p'):  # Avoid rapid toggling
			time.sleep(0.1)

	if keyboard.is_pressed('e'):
		break

	if running:
		flag = 0
		pic = pyautogui.screenshot(region=(287, 162, 795, 479))

		width, height = pic.size

		for x in range(0, width, 5):
			for y in range(0, height, 5):

				r, g, b = pic.getpixel((x, y))

				if r == 255 and g == 71 and b == 0:
					flag = 1
					click(x+287, y+162)
					time.sleep(0.05)
					break

			if flag == 1:
				break