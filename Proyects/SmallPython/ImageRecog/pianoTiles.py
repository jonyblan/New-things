from pyautogui import pixel
import win32api, win32con
import keyboard
import time

def click(x, y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
    time.sleep(0.1) #This pauses the script for 0.1 seconds
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
        if pixel(520, 400)[0] <= 15:
            click(520, 400)
        if pixel(621, 400)[0] <= 15:
            click(621, 400)
        if pixel(734, 400)[0] <= 15:
            click(734, 400)
        if pixel(843, 400)[0] <= 15:
            click(843, 400)
